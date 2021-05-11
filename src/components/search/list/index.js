import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchItemCtrl from "../../../controllers/search/item/SearchItemCtrl";

export default function SearchList({ resources, resourceType }) {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(resource) => resource._id}
      data={resources}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              console.log("Show Detail");
            }}
          >
            <SearchItemCtrl resource={item} resourceType={resourceType} />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
});
