import React from "react";
import { SafeAreaView, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import getYouTubeID from 'get-youtube-id';

export default function WaypointDetail({ waypoint, locations }) {

  const videoId = getYouTubeID(waypoint.videos[0].video_url)
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{waypoint.waypoint_name}</Text>
      { waypoint.videos[0].video_url && 
       <YoutubePlayer height={270} videoId={videoId} />
      }
     
      <Text>Hello</Text> 
    </SafeAreaView>
  );
}


