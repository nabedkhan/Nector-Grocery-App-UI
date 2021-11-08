import React, { Fragment } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../theme/color";

const WelcomeScreen = ({ navigation }) => {
  const handleGetStarted = () => navigation.navigate("Login");
  return (
    <Fragment>
      <ImageBackground
        source={require("../../assets/images/welcome-bg.png")}
        style={styles.image}
      >
        <View style={styles.contentWrapper}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo-white.png")}
          />
          <Text style={styles.heading}>Welcome{"\n"}to our store</Text>
          <Text style={styles.body}>
            Ger your groceries in as fast as one hour
          </Text>
          <PrimaryButton title="Get Started" handlePress={handleGetStarted} />
        </View>
      </ImageBackground>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  contentWrapper: {
    padding: 30,
    marginVertical: 30,
    alignItems: "center",
  },
  logo: {
    margin: 10,
  },
  heading: {
    fontSize: 48,
    color: colors.light,
    textAlign: "center",
    fontFamily: "GilroyMedium",
  },
  body: {
    opacity: 0.8,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 30,
    color: colors.light,
    fontFamily: "Gilroy",
  },
});

export default WelcomeScreen;
