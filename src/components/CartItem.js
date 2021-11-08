import { Entypo, Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CartContext } from "../contexts/cartContext";
import colors from "../theme/color";

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrement = (id) => {
    const newCart = cart.map((pro) =>
      pro.id === id ? { ...pro, qty: pro.qty + 1 } : pro
    );
    setCart(newCart);
  };
  const handleDecrement = (id) => {
    const newCart = cart.map((pro) => {
      if (pro.id === id) {
        return {
          ...pro,
          qty: pro.qty > 1 ? pro.qty - 1 : 1,
        };
      }

      return pro;
    });
    setCart(newCart);
  };

  const handleRemove = (id) => () => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={{ width: "100%", height: "100%" }} />
      </View>

      <View style={styles.contentBox}>
        <View style={styles.innerContentBox}>
          <Text style={styles.productName}>{item.name}</Text>

          <TouchableOpacity onPress={handleRemove(item.id)}>
            <Entypo name="cross" size={22} color={colors.grey} />
          </TouchableOpacity>
        </View>

        <View style={[styles.innerContentBox, { marginTop: 15 }]}>
          <View style={styles.innerContentBox}>
            <View style={styles.quantityWrapper}>
              <TouchableWithoutFeedback
                onPress={() => handleDecrement(item.id)}
              >
                <Feather name="minus" size={24} color={colors.grey} />
              </TouchableWithoutFeedback>
              <TextInput
                keyboardType="numeric"
                value={item.qty.toString()}
                style={styles.quantityInput}
                editable={false}
              />

              <TouchableWithoutFeedback
                onPress={() => handleIncrement(item.id)}
              >
                <Feather name="plus" size={24} color={colors.primary} />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: 20,
  },
  imageBox: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    marginRight: 15,
  },
  contentBox: {
    flex: 1,
  },
  innerContentBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: colors.border,
    width: 35,
    height: 35,
    borderRadius: 10,
    fontSize: 16,
    color: colors.secondary,
    textAlign: "center",
    marginHorizontal: 10,
    fontFamily: "GilroySemiBold",
  },
  price: {
    fontSize: 18,
    fontFamily: "GilroySemiBold",
  },
});

export default CartItem;
