import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import colors from "../theme/color";
import { Ionicons } from "@expo/vector-icons";

const CustomToast = (props) => {
  const { text1, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <Ionicons name="checkbox" size={22} color={colors.light} />
        <Text style={styles.addToCartText}>{text1}</Text>
      </View>

      <Pressable onPress={onPress}>
        <View style={styles.rightWrapper}>
          <Text style={styles.openCartText}>Open Cart</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.light} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.toastBackground,
    width: "90%",
    margin: 10,
    flexDirection: "row",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  addToCartText: {
    marginLeft: 5,
    color: colors.light,
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
  rightWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  openCartText: {
    color: colors.light,
    fontSize: 14,
    fontFamily: "GilroySemiBold",
  },
});

export default CustomToast;
