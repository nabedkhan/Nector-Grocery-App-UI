import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../theme/color";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState("12345");

  const handleSignup = () => {
    navigation.navigate("Shop");
  };

  const handleSignIn = () => navigation.navigate("Login");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login-bg.png")}
        blurRadius={2}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.body}>Enter your credentials to continue</Text>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            textContentType="name"
            onChangeText={(value) => setUsername(value)}
            value={username}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            textContentType="emailAddress"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            textContentType="password"
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        </View>

        <PrimaryButton
          title="Sign Up"
          handlePress={handleSignup}
          style={styles.loginBtn}
        />

        <View style={styles.bottomContent}>
          <Text style={styles.account}>Already have an account?</Text>
          <TouchableWithoutFeedback onPress={handleSignIn}>
            <Text style={styles.signBtn}>Sign In</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 20,
  },
  heading: {
    fontFamily: "GilroySemiBold",
    fontSize: 26,
    color: colors.secondary,
    marginBottom: 10,
  },
  body: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: "GilroyMedium",
  },
  inputBox: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  inputLabel: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: "GilroySemiBold",
    paddingBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.grey,
    color: colors.secondary,
    fontSize: 16,
    fontFamily: "GilroyMedium",
  },
  loginBtn: {
    marginTop: 40,
    marginBottom: 20,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  account: {
    fontFamily: "GilroySemiBold",
    color: colors.secondary,
  },
  signBtn: {
    paddingHorizontal: 5,
    fontFamily: "GilroySemiBold",
    color: colors.primary,
  },
});

export default RegisterScreen;
