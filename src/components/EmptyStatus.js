import Lottie from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyStatus = () => {
  return (
    <View style={styles.container}>
      <Lottie
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
        source={require("../animation/empty_cart.json")}
      />
      <Text style={styles.text}>List is Empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 26,
    fontFamily: "GilroySemiBold",
  },
});

export default EmptyStatus;
