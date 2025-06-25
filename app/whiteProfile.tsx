import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const WhiteProfile = ({ setCurrentPage, currentPage }) => {
  const [username, setUsername] = useState("chyaber02");
  const [firstName, setFirstName] = useState("Shasha");
  const [lastName, setLastName] = useState("Kolakola");
  const [dob, setDob] = useState("20-03-1997");

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Shasha Kolakola</Text>
          <Text style={styles.profileStatus}>Online</Text>
        </View>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.value}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor="#B9B9B9"
        />
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.value}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          placeholderTextColor="#B9B9B9"
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.value}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          placeholderTextColor="#B9B9B9"
        />
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput
          style={styles.value}
          value={dob}
          onChangeText={setDob}
          placeholder="Date Of Birth"
          placeholderTextColor="#B9B9B9"
        />
      </View>
      <TouchableOpacity style={styles.menuSignOutBtn}>
        <Text style={styles.menuSignOutText}>Sign Out</Text>
        <Image
          source={require("../assets/images/signout.png")}
          style={styles.menuSignOutIcon}
        />
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

export default WhiteProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
  },
  headerImage: {
    width: 90,
    height: 60,
    resizeMode: "contain",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 179,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 21,
    marginRight: 16,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2743FD",
  },
  profileStatus: {
    fontSize: 18,
    color: "#2743FD",
    marginTop: 2,
  },
  infoSection: {
    marginBottom: 32,
  },
  label: {
    color: "#3A3A3A",
    fontSize: 14,
    marginTop: 25,
    paddingBottom: 16,
  },
  value: {
    color: "#2743FD",
    fontSize: 14,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#DEE1EF",
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
  activeTab: {},
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
  menuSignOutBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#556BFF",
    borderRadius: 36.72,
    paddingVertical: 24,
    paddingHorizontal: 30,
    marginBottom: 70,
    width: "100%",
  },
  menuSignOutText: {
    color: "#556BFF",
    fontSize: 23,
    marginRight: 8,
  },
  menuSignOutIcon: {
    width: 25,
    height: 24,
  },
});
