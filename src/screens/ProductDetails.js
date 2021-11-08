import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Toast from "react-native-toast-message";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { CartContext } from "../contexts/cartContext";
import { FavoriteContext } from "../contexts/favoriteContext";
import colors from "../theme/color";

const ProductDetails = ({ navigation, route }) => {
  const bottomSheetRef = useRef();
  const { navigate } = useNavigation();
  const [quantity, setQuantity] = useState("1");
  const [addFavorite, setAddFavorite] = useState(false);

  const { height } = useWindowDimensions();

  // context
  const { cart, setCart } = useContext(CartContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const { name, image, price, description, id } = route.params.product;

  const handleIncrement = () =>
    setQuantity((state) => (Number(state) + 1).toString());

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((state) => (Number(state) - 1).toString());
  };
  // handle add and remove favorite
  const handleFavorite = (item) => {
    const findProduct = favorite.find((pro) => pro.id === item.id);
    if (findProduct) {
      const filtered = favorite.filter((pro) => pro.id !== item.id);
      setFavorite(filtered);
      setAddFavorite(false);
    } else {
      setAddFavorite(true);
      setFavorite([...favorite, item]);
    }
  };

  useEffect(() => {
    const findProduct = favorite.find((pro) => pro.id === id);
    if (findProduct) {
      setAddFavorite(true);
    }
  }, []);

  // handle reviews and open bottom sheet
  const handleReviewIcon = () => bottomSheetRef.current.open();

  const handleAddToCart = () => {
    let newCart = [];
    const findItem = cart.find((item) => item.id === id);
    if (findItem) {
      newCart = cart.map((item) =>
        item.id === id ? { ...item, qty: +quantity } : item
      );
    } else {
      newCart = [...cart, { ...route.params.product, qty: +quantity }];
    }

    setCart(newCart);

    Toast.show({
      type: "custom",
      text1: "Add To Cart",
      visibilityTime: 2000,
      onPress: () => navigate("Cart"),
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={image} />
      </View>
      <View
        style={{
          position: "absolute",
          left: 12,
          top: height * 0.05,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{name}</Text>
            <TouchableWithoutFeedback
              onPress={() => handleFavorite(route.params.product)}
            >
              {addFavorite ? (
                <Entypo name="heart" size={24} color={colors.primary} />
              ) : (
                <Feather name="heart" size={24} color={colors.grey} />
              )}
            </TouchableWithoutFeedback>
          </View>

          <Text style={styles.productDescription}>{description}</Text>

          <View style={styles.priceAndQtyWrapper}>
            <View style={styles.quantityWrapper}>
              <TouchableWithoutFeedback onPress={handleDecrement}>
                <Feather name="minus" size={24} color={colors.grey} />
              </TouchableWithoutFeedback>
              <TextInput
                editable={false}
                value={quantity}
                style={styles.quantityInput}
                onChangeText={(value) => setQuantity(value)}
              />

              <TouchableWithoutFeedback onPress={handleIncrement}>
                <Feather name="plus" size={24} color={colors.primary} />
              </TouchableWithoutFeedback>
            </View>

            <Text style={styles.price}>${price}</Text>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 20,
              borderColor: colors.border,
            }}
          />
          <View style={styles.reviewWrapper}>
            <Text style={styles.reviewText}>Reviews</Text>
            <TouchableWithoutFeedback onPress={handleReviewIcon}>
              <Feather
                name="chevron-right"
                size={24}
                color={colors.secondary}
              />
            </TouchableWithoutFeedback>
          </View>

          <RBSheet
            ref={bottomSheetRef}
            closeOnDragDown={true}
            closeOnPressMask={false}
            animationType="slide"
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: colors.primary,
              },
              container: {
                backgroundColor: colors.background,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  padding: 15,
                  fontSize: 16,
                  fontFamily: "GilroySemiBold",
                }}
              >
                No Reviews Yet
              </Text>
            </View>
          </RBSheet>
        </View>

        <PrimaryButton title="Add To Basket" handlePress={handleAddToCart} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#F2F3F2",
    height: 370,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentWrapper: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "GilroyBold",
    color: colors.secondary,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  productDescription: {
    fontSize: 13,
    lineHeight: 21,
    color: colors.grey,
    marginTop: 10,
  },
  priceAndQtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: colors.border,
    width: 45,
    height: 45,
    borderRadius: 17,
    fontSize: 18,
    color: colors.secondary,
    padding: 10,
    textAlign: "center",
    marginHorizontal: 10,
  },
  price: {
    fontSize: 24,
    fontFamily: "GilroyBold",
  },
  reviewWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewText: {
    fontFamily: "GilroySemiBold",
    fontSize: 16,
  },
});

export default ProductDetails;
