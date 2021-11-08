import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ category }) => {
  const { id, name, image } = category;
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate("ProductList", { id, name });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Image source={image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 190,
    width: "48%",
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(83, 177, 117, 0.7)",
    backgroundColor: "rgba(83, 177, 117, 0.1)",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "GilroyBold",
  },
});

export default CategoryCard;
