import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductDetails from "../screens/ProductDetails";
import ShopScreen from "../screens/ShopScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={ShopScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
