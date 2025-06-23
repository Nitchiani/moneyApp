import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const MENU_ITEMS = [
  { label: "Payments", icon: require("../assets/images/payments.png") },
  { label: "Transactions", icon: require("../assets/images/transactions.png") },
  { label: "My Cards", icon: require("../assets/images/cards.png") },
  { label: "Promotions", icon: require("../assets/images/promotions.png") },
  { label: "Savings", icon: require("../assets/images/savings.png") },
];

const home = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Side Menu Overlay */}
      {menuOpen && (
        <View style={styles.menuOverlay}>
          <View style={styles.menuContainer}>
            <View style={styles.menuProfileSection}>
              <Image
                source={require("../assets/images/avatar.png")}
                style={styles.menuAvatar}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.menuProfileName}>Shasha Kolakola</Text>
                <Text style={styles.menuProfileHandle}>@chyaber02</Text>
              </View>
            </View>
            <View style={styles.menuItemsSection}>
              {MENU_ITEMS.map((item, idx) => (
                <TouchableOpacity key={item.label} style={styles.menuItem}>
                  <Image source={item.icon} style={styles.menuItemIcon} />
                  <Text style={styles.menuItemText}>{item.label}</Text>
                  <Text style={styles.menuItemArrow}>{">"}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.menuSignOutBtn}>
              <Text style={styles.menuSignOutText}>Sign Out</Text>
              <Image
                source={require("../assets/images/signout.png")}
                style={styles.menuSignOutIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Tap outside to close */}
          <TouchableOpacity
            style={styles.menuBackdrop}
            onPress={() => setMenuOpen(false)}
          />
        </View>
      )}
      <View style={styles.topBackground}>
        <View style={styles.images}>
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
            <Image
              source={require("../assets/images/burgerMenu.png")}
              style={styles.burgerMenu}
            />
          </TouchableOpacity>
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
  menuOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
    flexDirection: "row",
  },
  menuContainer: {
    width: 300,
    height: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: 48,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 12,
    elevation: 8,
  },
  menuBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  menuProfileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  menuAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  menuProfileName: {
    fontWeight: "700",
    fontSize: 16,
    color: "#222",
  },
  menuProfileHandle: {
    fontSize: 13,
    color: "#888",
  },
  menuItemsSection: {
    flex: 1,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },
  menuItemArrow: {
    fontSize: 18,
    color: "#2B47FC",
    marginLeft: 8,
  },
  menuSignOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4950F9",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  menuSignOutText: {
    color: "#4950F9",
    fontWeight: "500",
    fontSize: 16,
    marginRight: 8,
  },
  menuSignOutIcon: {
    width: 20,
    height: 20,
  },
});
