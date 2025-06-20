import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {};

const home = (props: Props) => {
  return (
    <View>
      <View style={styles.topBackground}>
        <View style={styles.images}>
          <Image
            source={require("../assets/images/burgerMenu.png")}
            style={styles.burgerMenu}
          />
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.title}>Good morning {"\n"}Emma,</Text>
      </View>
      <View style={styles.middleBox}>
        <View style={styles.texts}>
          <Text style={styles.middleTitle}>Your total balance</Text>
          <Text style={styles.price}>$850.00</Text>
        </View>
        <Image
          source={require("../assets/images/columns.png")}
          style={styles.columns}
        />
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  topBackground: {
    width: "100%",
    height: 278,
    backgroundColor: "#4950F9",
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
    paddingVertical: 68,
  },
  title: {
    color: "#fff",
    textAlign: "left",
    fontSize: 32,
    marginHorizontal: 50,
  },
  images: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 2,
  },
  burgerMenu: {
    width: 30,
    height: 30,
  },
  avatar: { width: 50, height: 50 },
  middleBox: {
    backgroundColor: "#fff",
    width: 315,
    height: 321,
    borderRadius: 40,
    top: -32,
    alignSelf: "center",
    padding: 32,
    justifyContent: "flex-end",
    flexDirection: "column",
    gap: 26,
  },
  columns: {
    width: 250,
    height: 166,
    alignSelf: "center",
  },
  texts: {
    gap: 8,
  },
  middleTitle: {
    fontSize: 16,
  },
  price: {
    fontWeight: 700,
    fontSize: 30,
    color: "#2D99FF",
  },
});
