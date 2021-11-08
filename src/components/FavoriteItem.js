import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../theme/color";

const FavoriteItem = ({ item }) => {
  const { navigate } = useNavigation();
  const onPress = (item) => () => {
    navigate("ProductDetails", { product: item });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress(item)}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imageWrapper}>
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.size}>250ml</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.price}>${item.price}</Text>
          <Entypo
            name="chevron-small-right"
            size={20}
            color={colors.secondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  imageWrapper: {
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
  size: {
    fontSize: 14,
    fontFamily: "GilroyMedium",
    color: colors.grey,
    marginTop: 3,
  },
  price: {
    fontSize: 16,
    fontFamily: "GilroySemiBold",
    marginRight: 5,
  },
});

export default FavoriteItem;
