import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import Toast from "react-native-toast-message";
import { AuthContext } from "../contexts/userContext";
import toastConfig from "../utils/toastConfig";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import navigationTheme from "./navigationTheme";

const RootNavigator = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <NavigationContainer theme={navigationTheme}>
      {userInfo && userInfo.loggedIn ? <AppNavigator /> : <AuthNavigator />}
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default RootNavigator;
