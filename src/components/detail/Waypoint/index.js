import React from "react";
import { SafeAreaView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function WaypointDetail({ waypoint, locations }) {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YoutubePlayer height={250} videoId={"49BCc6FJEK8"} />
    </SafeAreaView>
  );
}


