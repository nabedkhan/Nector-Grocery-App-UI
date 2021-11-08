import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProductDetails from "../screens/ProductDetails";

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Favorite",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "GilroyBold",
        },
      }}
    >
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
