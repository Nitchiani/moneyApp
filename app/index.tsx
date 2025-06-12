import Buttons from "@/components/Buttons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const index = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <View>
        <Image
          source={require("../assets/images/backgroundImage.png")}
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>Save your money conveniently.</Text>
        <Text style={styles.bio}>
          Get 5% cash back for each transaction and spend it easily.
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.dots}>
          <View style={styles.activeDot}></View>
          <View style={styles.inActiveDot}></View>
          <View style={styles.inActiveDot}></View>
        </View>
        <View style={styles.button}>
          <Buttons text="Next" variant="blue" />
        </View>
      </View>

      <View style={styles.background}></View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 90,
  },
  background: {
    position: "absolute",
    width: 470,
    height: 470,
    bottom: 0,
    left: -133,
    backgroundColor: "#F5F6FA",
    borderRadius: 470,
    zIndex: 0,
  },
  logo: {
    width: 55,
    height: 53,
    resizeMode: "contain",
    alignSelf: "center",
  },
  backgroundImage: {
    width: 280,
    height: 202,
    resizeMode: "cover",
    alignSelf: "center",
    marginTop: 60,
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 36,
    color: "#2743FD",
    width: screenWidth * 0.6,
  },
  bio: {
    color: "#7C2AFF",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 28,
    width: screenWidth * 0.6,
  },
  texts: {
    paddingTop: 125,
    zIndex: 1,
    paddingHorizontal: 30,
    flex: 1,
    gap: 26,
  },
  dots: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  activeDot: {
    backgroundColor: "#2A46FF",
    width: 22,
    height: 5,
    borderRadius: 2.5,
  },
  inActiveDot: {
    backgroundColor: "#B5BFFF",
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  bottomSection: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    zIndex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  button: {
    width: 193,
  },
});
