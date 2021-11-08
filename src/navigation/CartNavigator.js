import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useWindowDimensions } from "react-native";
import CartScreen from "../screens/CartScreen";
import PaymentComplete from "../screens/PaymentComplete";
import colors from "../theme/color";

const Stack = createStackNavigator();

const CartNavigator = () => {
  const { height } = useWindowDimensions();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "My Cart",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "GilroyBold",
          color: colors.secondary,
        },
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
        name="PaymentComplete"
        component={PaymentComplete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
