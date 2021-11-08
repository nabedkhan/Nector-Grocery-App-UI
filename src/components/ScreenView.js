import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const ScreenView = ({ children, style }) => (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ScreenView;
