import React from "react";
import { View } from "react-native";
import colors from "../theme/color";

const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: colors.border,
      }}
    />
  );
};

export default ItemSeparator;
