import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonsProps = {
  text: any;
  variant?: string;
  onPress?: () => void;
};

const CustomButton = ({ text, variant = "blue", onPress }: ButtonsProps) => {
  const isBlue = variant === "blue";
  const shouldShowArrow = text?.toString().toLowerCase() !== "get started";

  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      {isBlue ? (
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.blueText}>{text}</Text>
            {shouldShowArrow && (
              <Image
                source={require("../assets/images/whiteArrow.png")}
                style={styles.arrow}
              />
            )}
          </View>
          <Image
            source={require("../assets/images/topMask.png")}
            style={styles.mask}
          />
        </LinearGradient>
      ) : (
        <View style={[styles.button, styles.transparentButton]}>
          <View style={styles.buttonContent}>
            <Text style={styles.transparentText}>{text}</Text>
            {shouldShowArrow && (
              <Image
                source={require("../assets/images/blueArrow.png")}
                style={styles.arrow}
              />
            )}
          </View>
          <Image
            source={require("../assets/images/bottomMask.png")}
            style={styles.mask}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    marginHorizontal: 32,
  },
  button: {
    padding: 24,
    borderRadius: 28,
    position: "relative",
    overflow: "hidden",
  },
  transparentButton: {
    borderWidth: 1,
    borderColor: "#556BFF",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blueText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  transparentText: {
    color: "#556BFF",
    fontSize: 20,
    fontWeight: "400",
  },
  arrow: {
    width: 21,
    height: 17,
  },
  mask: {
    position: "absolute",
    width: 327,
    height: 75,
    top: 0,
    right: 0,
    zIndex: 1,
  },
});
