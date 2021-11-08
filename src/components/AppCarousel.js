import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import colors from "../theme/color";

const AppCarousel = () => {
  return (
    <Swiper
      autoplay
      height={120}
      paginationStyle={{ bottom: 5 }}
      containerStyle={styles.slideContainer}
      dotStyle={{
        backgroundColor: colors.secondary,
        opacity: 0.3,
      }}
      activeDotStyle={{
        backgroundColor: colors.primary,
        width: 17,
        borderRadius: 15,
      }}
    >
      <ImageBackground
        source={require("../../assets/images/slide-bg.png")}
        style={styles.slide}
      >
        <View style={styles.contentWrapper}>
          <Image source={require("../../assets/images/vegetables.png")} />
          <View>
            <Text style={styles.heading}>Fresh Vegetables</Text>
            <Text style={styles.body}>Get Up To 40% OFF</Text>
          </View>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require("../../assets/images/slide-bg.png")}
        style={styles.slide}
      >
        <View style={styles.contentWrapper}>
          <Image source={require("../../assets/images/vegetables.png")} />
          <View>
            <Text style={styles.heading}>Fresh Vegetables</Text>
            <Text style={styles.body}>Get Up To 40% OFF</Text>
          </View>
        </View>
      </ImageBackground>

      <ImageBackground
        source={require("../../assets/images/slide-bg.png")}
        style={styles.slide}
      >
        <View style={styles.contentWrapper}>
          <Image source={require("../../assets/images/vegetables.png")} />
          <View>
            <Text style={styles.heading}>Fresh Vegetables</Text>
            <Text style={styles.body}>Get Up To 40% OFF</Text>
          </View>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 30,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
  },
  heading: {
    color: colors.secondary,
    fontFamily: "GilroyBold",
    fontSize: 20,
  },
  body: {
    color: colors.primary,
    fontFamily: "GilroyBold",
  },
});

export default AppCarousel;
