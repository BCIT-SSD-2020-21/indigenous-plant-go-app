import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { SearchDefault } from "../../../icons/Search";

export default function SearchInput({
  resourceType,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...styles.button, flexDirection: "row", padding: 3 }}>
          <SearchDefault style={{ flex: 1 }} />
          <TextInput
            onChangeText={(text) => setSearchQuery(text)}
            placeholderTextColor={"grey"}
            placeholder={`Search by ${resourceType.substring(
              0,
              resourceType.length - 1
            )} name, category, or tag.`}
            style={styles.input}
            autoFocus={true}
            value={searchQuery}
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#191919",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#333",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    width: "100%",
    color: "white",
    paddingHorizontal: 10,
    borderRadius: 20,
    flex: 1,
  },
});
