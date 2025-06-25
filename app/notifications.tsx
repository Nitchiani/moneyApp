import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  setCurrentPage: (page: string) => void;
  currentPage: string;
};

const NOTIFICATIONS = [
  {
    id: 1,
    name: "George Armani",
    message: "George Just sent you $15",
    avatar: require("../assets/images/george.png"), // You'll need to add these avatar images
    amount: "$15",
  },
  {
    id: 2,
    name: "Pedro Gonzales",
    message: "Pedro sent you $1 sent you $45",
    avatar: require("../assets/images/pedro.png"),
    amount: "$45",
  },
  {
    id: 3,
    name: "Nuked Nuke",
    message: "Nuke sent you $45",
    avatar: require("../assets/images/nuke.png"),
    amount: "$45",
  },
  {
    id: 4,
    name: "Nini Gordon",
    message: "Gordon sent you $125",
    avatar: require("../assets/images/nini.png"),
    amount: "$125",
  },
  {
    id: 5,
    name: "Chyaber Gonzales",
    message: "Chyaber sent you $125",
    avatar: require("../assets/images/chyaber.png"),
    amount: "$125",
  },
  {
    id: 6,
    name: "Your Dog",
    message: "Dog sent you $10",
    avatar: require("../assets/images/dog.png"),
    amount: "$10",
  },
];

const Notifications = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
            source={require("../assets/images/search.png")} // You'll need to add a search icon
            style={styles.searchIcon}
          />
          <Text style={styles.searchPlaceholder}>Search</Text>
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You can check your</Text>
        <Text style={styles.title}>notifications here.</Text>
      </View>

      {/* Notifications List */}
      <ScrollView
        style={styles.notificationsList}
        showsVerticalScrollIndicator={false}
      >
        {NOTIFICATIONS.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={styles.notificationItem}
          >
            <Image
              source={notification.avatar}
              style={styles.notificationAvatar}
            />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationName}>{notification.name}</Text>
              <Text style={styles.notificationMessage}>
                {notification.message}
              </Text>
            </View>
            <Image
              source={require("../assets/images/leftArrow.png")}
              style={styles.notificationArrow}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, props.currentPage === "home" && styles.activeTab]}
          onPress={() => props.setCurrentPage("home")}
        >
          <Image
            source={require("../assets/images/wallet.png")}
            style={styles.tabIcon}
          />
          {props.currentPage === "home" && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, props.currentPage === "notifications" && styles.activeTab]}
          onPress={() => props.setCurrentPage("notifications")}
        >
          <Image
            source={require("../assets/images/notifications.png")}
            style={[styles.tabIcon, styles.activeTabIcon]}
          />
          {props.currentPage === "notifications" && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, props.currentPage === "profile" && styles.activeTab]}
          onPress={() => props.setCurrentPage("profile")}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.tabIcon}
          />
          {props.currentPage === "profile" && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },

  searchContainer: {
    paddingTop: 84,
    paddingHorizontal: 37,
    marginBottom: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: "#3D56FA",
  },
  searchPlaceholder: {
    color: "#3D56FA",
    fontSize: 16,
  },
  titleContainer: {
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3A3A3A",
  },
  notificationsList: {
    flex: 1,
    paddingHorizontal: 29,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DEE1EF",
    paddingBottom: 20,
  },
  notificationAvatar: {
    width: 43.99,
    height: 44.49,
    borderRadius: 10.77,
    marginRight: 16,
    shadowColor: "#00000033",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1.72 },
    shadowRadius: 8.62,
    elevation: 2,
  },
  notificationContent: {
    flex: 1,
  },
  notificationName: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 16,
    color: "#3D56FA",
  },
  notificationArrow: {
    width: 10,
    height: 18,
    tintColor: "#3D56FA",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: "#F0F2FF",
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
  activeTabIcon: {
    tintColor: "#6B7CFF",
  },
  activeIndicator: {
    position: "absolute",
    bottom: -25,
    width: 40,
    height: 3,
    backgroundColor: "#6B7CFF",
    borderRadius: 2,
  },
});
