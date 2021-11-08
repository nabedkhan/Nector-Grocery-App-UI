import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../theme/color";

const IconButton = ({ handlePress, style, title, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      onPress={handlePress}
      underlayColor={colors.secondary}
      activeOpacity={1}
    >
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
  },
  btnText: {
    fontFamily: "GilroyMedium",
    fontSize: 18,
    color: colors.light,
  },
});

export default IconButton;
