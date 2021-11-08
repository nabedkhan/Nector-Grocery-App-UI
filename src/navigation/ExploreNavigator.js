import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ExploreScreen from "../screens/ExploreScreen";
import ProductDetails from "../screens/ProductDetails";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
