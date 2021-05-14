import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function WaypointRelated({ resources, showDetail }) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.fieldTitle, marginTop: 0 }}>Plants Nearby</Text>
      <View>
        <View style={styles.topicContainer}>
          {resources.map((resource, index) => (
            <View style={styles.topic} key={index}>
              <TouchableOpacity
                onPress={
                  showDetail
                    ? () => showDetail(resource._id)
                    : () => {
                        return;
                      }
                }
              >
                <Text style={{ color: "white" }}>{resource.plant_name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  topicContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  topic: {
    backgroundColor: "#222",
    marginRight: 5,
    marginBottom: 5,
    padding: 3,
    color: "lightgray",
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 2,
  },
  fieldTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
    color: "white",
  },
});
