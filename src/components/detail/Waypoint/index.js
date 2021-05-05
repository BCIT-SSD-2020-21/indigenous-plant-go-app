import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function WaypointDetail({ waypoint, locations }) {

  
  
  return (
    <View>
      <Text>Display : {waypoint.waypoint_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
