import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../theme/color";

const SearchBox = ({ placeholder = "Search Store" }) => {
  console.log("");
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color={colors.secondary} />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
    color: colors.secondary,
    fontFamily: "GilroyMedium",
    flexGrow: 1,
  },
});

export default SearchBox;
