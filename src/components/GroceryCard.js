import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GroceryCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              item.id % 2 === 0
                ? "rgba(83, 177, 117, 0.2)"
                : "rgba(248, 164, 76, 0.2)",
          },
        ]}
      >
        <Image source={item.image} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 230,
  },
  text: {
    fontSize: 20,
    fontFamily: "GilroySemiBold",
    marginLeft: 15,
  },
});

export default GroceryCard;
