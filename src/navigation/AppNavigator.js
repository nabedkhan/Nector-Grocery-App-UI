import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { FavoriteContext } from "../contexts/favoriteContext";
import AccountScreen from "../screens/AccountScreen";
import colors from "../theme/color";
import CartNavigator from "./CartNavigator";
import ExploreNavigator from "./ExploreNavigator";
import FavoriteNavigator from "./FavoriteNavigator";
import ShopNavigator from "./ShopNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { cart } = useContext(CartContext);
  const { favorite } = useContext(FavoriteContext);

  const tabBadge = (item) => {
    if (item.length > 0) {
      return { tabBarBadge: item.length };
    }
  };
  const tabBarBadgeStyle = {
    backgroundColor: colors.primary,
    color: "#fff",
    fontFamily: "GilroyBold",
    fontSize: 12,
  };

  return (
    <Tab.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ExploreStack"
        component={ExploreNavigator}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shopping-search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          ...tabBadge(cart),
          tabBarBadgeStyle,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteNavigator}
        options={{
          ...tabBadge(favorite),
          tabBarBadgeStyle,
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AccountTab"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
