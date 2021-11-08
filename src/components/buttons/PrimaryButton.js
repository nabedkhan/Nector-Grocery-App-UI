import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../../theme/color";

const PrimaryButton = ({
  title,
  style,
  textStyle,
  handlePress,
  disabled = false,
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.btn,
        style,
        { backgroundColor: disabled ? colors.grey : colors.primary },
      ]}
      onPress={handlePress}
      underlayColor={colors.secondary}
      activeOpacity={1}
      disabled={disabled}
    >
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
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

export default PrimaryButton;
