import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WaypointDefault } from "../../../../icons/Waypoint";

export default function WaypointHead({
  waypoint,
  topics,
  setImageLoaded,
  imageLoaded,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrap}>
        <View>
          {waypoint.images && waypoint.images.length > 0 ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: waypoint.images[0].image_url }}
                style={styles.image}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded ? (
                <View style={styles.imageOverlay}>
                  <WaypointDefault />
                </View>
              ) : null}
            </View>
          ) : (
            <View
              style={{
                ...styles.imageContainer,
                ...styles.placeholder,
              }}
            >
              <WaypointDefault />
            </View>
          )}
        </View>
        <View style={{ width: "73%" }}>
          <View style={{ marginBottom: 7 }}>
            <Text style={styles.heading}>{waypoint.waypoint_name}</Text>
          </View>
          <View style={styles.topicContainer}>
            {topics.map((topic, index) => (
              <View style={styles.topic} key={index}>
                <Text style={{ color: "white" }}>{topic}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  heading: {
    fontWeight: "bold",
    color: "#f7f7f7",
    fontSize: 21,
  },
  subheading: {
    color: "gray",
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
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 20,
    position: "relative",
  },
  placeholder: {
    backgroundColor: "lightgray",
    borderRadius: 100 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 100 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    borderRadius: 100 / 2,
    overflow: "hidden",
  },
  itemWrap: {
    display: "flex",
    flexDirection: "row",
  },
});
