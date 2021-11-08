import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CategoryCard from "../components/CategoryCard";
import ScreenView from "../components/ScreenView";
import SearchBox from "../components/SearchBox";
import categories from "../__fakeApi__/categories";

const ExploreScreen = () => {
  return (
    <ScreenView>
      <View style={styles.container}>
        <SearchBox placeholder="Search Category" />

        <View style={styles.categories}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </View>
      </View>

      <StatusBar style="auto" />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 15,
  },
});

export default ExploreScreen;
