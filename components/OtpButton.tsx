import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NewButtonProps = {
  text: any;
  onPress?: () => void;
};

const NewBlueButton = ({ text, onPress }: NewButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <LinearGradient
        colors={["#6075FF", "#1433FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>

        {/* Top right corner image */}
        <Image
          source={require("../assets/images/topMask.png")}
          style={styles.topRightMask}
        />

        {/* Top left corner image */}
        <Image
          source={require("../assets/images/topMask.png")}
          style={styles.topLeftMask}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NewBlueButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: 37,
    width: "100%",
  },
  button: {
    padding: 24,
    borderRadius: 28,
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  topRightMask: {
    position: "absolute",
    width: 327,
    height: 75,
    top: 0,
    right: 0,
    zIndex: 1,
  },
  topLeftMask: {
    position: "absolute",
    width: 327,
    height: 75,
    top: 0,
    left: 0,
    zIndex: 1,
    transform: [{ scaleX: -1 }],
  },
});
