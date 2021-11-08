import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CartItem from "../components/CartItem";
import CheckoutListItem from "../components/CheckoutListItem";
import EmptyStatus from "../components/EmptyStatus";
import ItemSeparator from "../components/ItemSeparator";
import { CartContext } from "../contexts/cartContext";
import colors from "../theme/color";

const CartScreen = () => {
  const bottomSheetRef = useRef();
  const { cart } = useContext(CartContext);
  const { navigate } = useNavigation();

  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.qty * curr.price,
    0
  );

  const handleCheckout = () => bottomSheetRef.current.open();

  // useEffect(() => {

  //   return
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={() => <EmptyStatus />}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />

      <View style={styles.btnWrapper}>
        <PrimaryButton
          disabled={totalPrice === 0}
          handlePress={handleCheckout}
          title={`Go To Checkout $${totalPrice}`}
        />
      </View>

      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        height={400}
        customStyles={{
          draggableIcon: { display: "none" },
          wrapper: { backgroundColor: "transparent" },
          container: {
            backgroundColor: colors.background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={styles.bottomSheetWrapper}>
          <Text style={styles.rbTitle}>Checkout</Text>

          <Entypo
            name="cross"
            size={22}
            color="black"
            onPress={() => bottomSheetRef.current.close()}
          />
        </View>

        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <CheckoutListItem title="Delivery" subTitle="Select Method" />
          <ItemSeparator />
          <CheckoutListItem
            title="Payment"
            subTitle="Select Method"
            IconComponent={() => (
              <FontAwesome name="cc-mastercard" size={22} color={colors.grey} />
            )}
          />
          <ItemSeparator />
          <CheckoutListItem title="Promo Code" subTitle="Pick Discount" />
          <ItemSeparator />
          <CheckoutListItem title="Total Cost" subTitle={`$${totalPrice}`} />

          <View style={styles.btnWrapper}>
            <PrimaryButton
              title="Place Order"
              handlePress={() => {
                bottomSheetRef.current.close();
                navigate("PaymentComplete");
              }}
            />
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  btnWrapper: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  bottomSheetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  rbTitle: {
    fontSize: 20,
    fontFamily: "GilroyBold",
  },
});

export default CartScreen;
