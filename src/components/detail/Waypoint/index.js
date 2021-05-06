import React ,{useState, useEffect} from "react";
import { SafeAreaView, Text, View, StyleSheet, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import getYouTubeID from 'get-youtube-id';
import SoundPlayer from 'react-native-sound-player'
import { Audio} from 'expo-av'

export default function WaypointDetail({ waypoint, locations }) {

  //Get youtubeId
  const videoId = getYouTubeID(waypoint.videos[0].video_url)

  //PlaySound
  //Get audio file url
  const soundFile = waypoint.audio_files[0].audio_file_url

  //
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: soundFile }
    );
    setSound(sound);
    await sound.playAsync();  
  }

  return (
    <SafeAreaView  style={styles.container}>
      <Text>{waypoint.waypoint_name}</Text>
      { waypoint.videos[0].video_url && 
       <YoutubePlayer height={270} videoId={videoId} />
      }
     
      <Text>Description: {waypoint.description}</Text> 
      <Button title="Play Audio at [0]" onPress = {playSound}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  }
})
