import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { CartContext } from "../contexts/cartContext";
import colors from "../theme/color";
import PrimaryButton from "./buttons/PrimaryButton";

const ProductCard = ({ product, onPress, style }) => {
  const { cart, setCart } = useContext(CartContext);
  const { name, price, image } = product;

  const handleCartPress = (pro) => {
    let newCart = [];
    const findItem = cart.find((item) => item.id === pro.id);
    if (findItem) {
      newCart = cart.map((item) =>
        item.id === pro.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, qty: 1 }];
    }

    setCart(newCart);

    Toast.show({
      type: "custom",
      text1: "Add To Cart",
      visibilityTime: 2000,
      onPress: () => console.log("Pressed From Product Details"),
    });
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageWrapper}>
          <Image
            source={image}
            resizeMode="contain"
            style={{ width: "100%" }}
          />
        </View>
        <Text style={styles.heading}>{name}</Text>
      </TouchableOpacity>

      <View style={styles.bottomWrapper}>
        <Text style={styles.price}>${price}</Text>
        <PrimaryButton
          title="+"
          handlePress={() => handleCartPress(product)}
          style={{
            width: 42,
            height: 42,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
          textStyle={{ fontSize: 24 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    width: 175,
    padding: 15,
  },
  heading: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
  },
  bottomWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
});

export default ProductCard;
