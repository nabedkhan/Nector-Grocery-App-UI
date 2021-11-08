import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AppCarousel from "../components/AppCarousel";
import GroceryCard from "../components/GroceryCard";
import ProductCard from "../components/ProductCard";
import ScreenView from "../components/ScreenView";
import SearchBox from "../components/SearchBox";
import colors from "../theme/color";
import products from "../__fakeApi__/products";

const ShopScreen = ({ navigation }) => {
  const onPress = (item) => {
    navigation.navigate("ProductDetails", { product: item });
  };

  const exclusiveOffer = products.slice(9, 13);
  const bestSelling = products.slice(0, 5);

  const groceries = [
    {
      id: 1,
      title: "Pulses",
      image: require("../../assets/images/pulses.png"),
    },
    { id: 2, title: "Rice", image: require("../../assets/images/rice.png") },
    {
      id: 3,
      title: "Pulses",
      image: require("../../assets/images/pulses.png"),
    },
    { id: 4, title: "Rice", image: require("../../assets/images/rice.png") },
  ];
  return (
    <ScreenView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20 }}>
          <SearchBox />
          <AppCarousel />
        </View>

        <View style={{ marginBottom: 30 }}>
          <View style={styles.sectionWrapper}>
            <Text style={styles.heading}>Exclusive Offer</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <FlatList
              horizontal
              data={exclusiveOffer}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ProductCard product={item} onPress={() => onPress(item)} />
              )}
              ItemSeparatorComponent={() => (
                <View style={{ marginRight: 20 }} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={{ marginBottom: 30 }}>
          <View style={styles.sectionWrapper}>
            <Text style={styles.heading}>Best Selling</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <FlatList
              horizontal
              data={bestSelling}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ProductCard product={item} onPress={() => onPress(item)} />
              )}
              ItemSeparatorComponent={() => (
                <View style={{ marginRight: 20 }} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={{ marginBottom: 30 }}>
          <View style={styles.sectionWrapper}>
            <Text style={styles.heading}>Groceries</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <FlatList
              horizontal
              data={groceries}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <GroceryCard item={item} />}
              ItemSeparatorComponent={() => (
                <View style={{ marginRight: 20 }} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" backgroundColor="white" />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  sectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: "GilroyBold",
    color: colors.secondary,
  },
  seeAll: {
    fontSize: 16,
    fontFamily: "GilroyMedium",
    color: colors.primary,
  },
});

export default ShopScreen;
