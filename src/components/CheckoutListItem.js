import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckoutListItem = ({ title, subTitle, onPress, IconComponent }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {IconComponent ? (
            <IconComponent />
          ) : (
            <Text style={{ fontFamily: "GilroySemiBold" }}>{subTitle}</Text>
          )}
          <Entypo name="chevron-small-right" size={28} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
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
    fontFamily: "GilroySemiBold",
  },
});

export default CheckoutListItem;
