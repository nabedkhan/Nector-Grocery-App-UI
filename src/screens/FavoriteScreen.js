import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import EmptyStatus from "../components/EmptyStatus";
import FavoriteItem from "../components/FavoriteItem";
import ItemSeparator from "../components/ItemSeparator";
import { FavoriteContext } from "../contexts/favoriteContext";

const FavoriteScreen = () => {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={({ item }) => <FavoriteItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={() => <EmptyStatus />}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
});

export default FavoriteScreen;
