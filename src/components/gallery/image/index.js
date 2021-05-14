import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PlantDefault } from "../../../icons/Plant";
import { WaypointDefault } from "../../../icons/Waypoint";

export default function GalleryImage({
  image,
  url,
  resourceType,
  setImageLoaded,
  imageLoaded,
}) {
  return (
    <View>
      <View>
        <View style={{ ...styles.imageContainer, width: 300 }}>
          {url ? (
            <Image
              source={{ uri: url }}
              style={styles.image}
              onLoad={() => setImageLoaded(true)}
            />
          ) : null}
          {!imageLoaded ? (
            <View style={styles.imageOverlay}>
              {resourceType === "plants" ? (
                <PlantDefault />
              ) : (
                <WaypointDefault />
              )}
            </View>
          ) : null}
        </View>
      </View>
      <Text style={{ maxWidth: 300, marginTop: 3, color: "white" }}>
        {image.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 175,
    marginRight: 10,
    position: "relative",
    borderColor: "lightgray",
    flex: 1,
  },
  placeholder: {
    backgroundColor: "lightgray",
    borderRadius: 75 / 2,
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
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
