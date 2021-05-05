import React from "react";
import { 
  StyleSheet, 
  Text, 
  View,  
  FlatList,
  TouchableOpacity, 
} from "react-native";

export default function ListWaypoints({waypoints, showDetail}) {
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(waypoint) => waypoint._id}
      data={waypoints}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              showDetail(item);
            }}
          >
            <Text>{item.waypoint_name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
