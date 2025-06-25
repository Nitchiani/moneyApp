import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Notifications from "./notifications"; // Import notifications component
import WhiteProfile from "./whiteProfile";

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
  const [currentPage, setCurrentPage] = useState("home"); // Add page state

  // If notifications page is active, render it
  if (currentPage === "notifications") {
    return <Notifications setCurrentPage={setCurrentPage} currentPage={currentPage} />;
  }
  if (currentPage === "profile") {
    return (
      <WhiteProfile setCurrentPage={setCurrentPage} currentPage={currentPage} />
    );
  }

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

                  <Image
                    source={require("../assets/images/leftArrow.png")}
                    style={styles.menuItemArrow}
                  />
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
      <TouchableOpacity style={styles.button}>
        <View>
          <Text style={styles.buttonText}>Check Your {"\n"} Bank Accounts</Text>
          <Image
            source={require("../assets/images/leftArrow.png")}
            style={styles.menuItemArrow}
          />
        </View>
      </TouchableOpacity>
      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, currentPage === "home" && styles.activeTab]}
          onPress={() => setCurrentPage("home")}
        >
          <Image
            source={require("../assets/images/wallet.png")}
            style={styles.tabIcon}
          />
          {currentPage === "home" && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setCurrentPage("notifications")}
        >
          <Image
            source={require("../assets/images/notifications.png")}
            style={styles.tabIcon}
          />
          {currentPage === "notifications" && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setCurrentPage("profile")}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.tabIcon}
          />
          {currentPage === "profile" && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
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
    gap: 22,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 18,
    color: "#2B47FC",
  },
  menuItemArrow: {
    fontSize: 18,
    color: "#2B47FC",
    marginLeft: 8,
    width: 7,
    height: 12,
  },
  menuSignOutBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#556BFF",
    borderRadius: 28,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 70,
    width: "100%",
  },
  menuSignOutText: {
    color: "#556BFF",
    fontSize: 18,
    marginRight: 8,
  },
  menuSignOutIcon: {
    width: 20,
    height: 20,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingVertical: 35,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  activeTab: {
    // Active tab styling
  },
  tabIcon: {
    width: 21,
    height: 25,
    resizeMode: "contain",
  },
  activeIndicator: {
    position: "absolute",
    bottom: -35,
    width: 40,
    height: 3,
    backgroundColor: "#6B7CFF",
    borderRadius: 2,
  },
  button: {
    backgroundColor: "#6075FF",
    paddingVertical: 35,
    marginHorizontal: 39,
    borderRadius: 40,
    paddingHorizontal: 33,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});
