import { useNavigation } from "@react-navigation/core";
import Lottie from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenView from "../components/ScreenView";
import colors from "../theme/color";

const PaymentComplete = () => {
  const { navigate } = useNavigation();

  return (
    <ScreenView>
      <View style={styles.container}>
        <Lottie
          autoPlay
          loop
          style={{ width: "auto", height: "auto" }}
          source={require("../animation/success.json")}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "GilroyBold",
            fontSize: 28,
            marginTop: 20,
          }}
        >
          You Order has been accepted!
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: colors.grey,
            marginTop: 10,
          }}
        >
          Your items has been placed and is on it’s way to being processed
        </Text>

        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate("Home")}>
          <Text
            style={{
              marginTop: 30,
              textAlign: "center",
              fontFamily: "GilroySemiBold",
            }}
          >
            Back To Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
  },
});

export default PaymentComplete;
