import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "../components/ProductCard";
import products from "../__fakeApi__/products";

const ProductListScreen = ({ route }) => {
  const category = route.params.name;
  const { navigate } = useNavigation();

  const filtered = products.filter(
    (pro) => pro.category === category.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={filtered}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigate("ProductDetails", { product: item })}
            style={{ width: "48%" }}
          />
        )}
        columnWrapperStyle={{
          marginBottom: 15,
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default ProductListScreen;
