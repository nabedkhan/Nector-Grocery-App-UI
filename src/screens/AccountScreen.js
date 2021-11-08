import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ItemSeparator from "../components/ItemSeparator";
import ListItem from "../components/ListItem";
import ScreenView from "../components/ScreenView";
import { AuthContext } from "../contexts/userContext";
import colors from "../theme/color";

const data = [
  {
    id: 1,
    title: "Orders",
    IconComponent: Feather,
    iconName: "shopping-bag",
  },
  {
    id: 2,
    title: "My Details",
    IconComponent: AntDesign,
    iconName: "idcard",
  },
  {
    id: 3,
    title: "Delivery Address",
    IconComponent: Feather,
    iconName: "map-pin",
  },
  {
    id: 4,
    title: "Payment Methods",
    IconComponent: AntDesign,
    iconName: "creditcard",
  },
  {
    id: 5,
    title: "Promo Code",
    IconComponent: MaterialCommunityIcons,
    iconName: "offer",
  },
  {
    id: 6,
    title: "Notifications",
    IconComponent: MaterialCommunityIcons,
    iconName: "bell-outline",
  },
  {
    id: 7,
    title: "Help",
    IconComponent: MaterialCommunityIcons,
    iconName: "help-circle-outline",
  },
  {
    id: 8,
    title: "About",
    IconComponent: AntDesign,
    iconName: "exclamationcircleo",
  },
];

const AccountScreen = () => {
  const { removeUserInfo: logout } = useContext(AuthContext);

  return (
    <ScreenView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/user/user.png")}
            style={styles.image}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.name}>Nabed Khan</Text>
            <Text style={styles.email}>nabed420@gmail.com</Text>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListFooterComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity activeOpacity={0.8} onPress={logout}>
          <View style={styles.buttonWrapper}>
            <Feather
              size={22}
              name="log-out"
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={styles.btnText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontFamily: "GilroyBold",
  },
  email: {
    fontSize: 16,
    color: colors.grey,
    fontFamily: "Gilroy",
  },
  buttonWrapper: {
    margin: 20,
    padding: 15,
    backgroundColor: colors.border,
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 13,
  },
  btnText: {
    fontSize: 15,
    fontFamily: "GilroySemiBold",
    textAlign: "center",
    color: colors.primary,
  },
});

export default AccountScreen;
