import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../theme/color";

const ListItem = ({ item }) => {
  const { title, IconComponent, iconName } = item;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          <IconComponent name={iconName} size={22} color={colors.secondary} />
          <Text style={styles.text}>{title}</Text>
        </View>

        <Entypo name="chevron-small-right" size={28} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
    fontFamily: "GilroySemiBold",
  },
});

export default ListItem;
