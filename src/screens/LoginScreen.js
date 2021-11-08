import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { AuthContext } from "../contexts/userContext";
import colors from "../theme/color";
import users from "../__fakeApi__/users";

const LoginScreen = ({ navigation }) => {
  const { setUserInfo } = useContext(AuthContext);
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    const findUser = users.find((user) => user.email === email);
    const checkPassword = findUser.password === password;
    if (!findUser || !checkPassword) {
      return Toast.show({
        type: "error",
        text1: "Invalid Email and Password",
        visibilityTime: 3000,
      });
    }

    setUserInfo({
      loggedIn: true,
      email: findUser.email,
    });
  };

  const handleSignUp = () => navigation.navigate("Register");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login-bg.png")}
        blurRadius={2}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.heading}>Logging</Text>
        <Text style={styles.body}>Enter your emails and password</Text>

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
          title="Log In"
          handlePress={handleLogin}
          style={styles.loginBtn}
        />

        <View style={styles.bottomContent}>
          <Text style={styles.account}>Don't have an account?</Text>
          <TouchableWithoutFeedback onPress={handleSignUp}>
            <Text style={styles.signBtn}>Sign Up</Text>
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

export default LoginScreen;
