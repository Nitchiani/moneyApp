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
  onBack?: () => void;
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusBar}>
          <View style={styles.signalBars}>
            <View style={[styles.bar, styles.bar1]} />
            <View style={[styles.bar, styles.bar2]} />
            <View style={[styles.bar, styles.bar3]} />
            <View style={[styles.bar, styles.bar4]} />
          </View>
          <View style={styles.wifiIcon}>
            <Text style={styles.wifiText}>📶</Text>
          </View>
          <View style={styles.batteryContainer}>
            <View style={styles.battery}>
              <View style={styles.batteryLevel} />
            </View>
          </View>
        </View>
      </View>

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
        <TouchableOpacity style={styles.tabItem} onPress={props.onBack}>
          <Image
            source={require("../assets/images/wallet.png")}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Image
            source={require("../assets/images/notifications.png")}
            style={[styles.tabIcon, styles.activeTabIcon]}
          />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.tabIcon}
          />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  time: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  signalBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: "#000",
    borderRadius: 1,
  },
  bar1: {
    height: 4,
  },
  bar2: {
    height: 6,
  },
  bar3: {
    height: 8,
  },
  bar4: {
    height: 10,
  },
  wifiIcon: {
    marginLeft: 4,
  },
  wifiText: {
    fontSize: 12,
  },
  batteryContainer: {
    marginLeft: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 2,
    position: "relative",
  },
  batteryLevel: {
    position: "absolute",
    left: 1,
    top: 1,
    bottom: 1,
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F2FF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: "#8B9CFF",
  },
  searchPlaceholder: {
    color: "#8B9CFF",
    fontSize: 16,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1A1D29",
    lineHeight: 32,
  },
  notificationsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  notificationAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1D29",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#6B7CFF",
    lineHeight: 18,
  },
  notificationArrow: {
    width: 8,
    height: 14,
    tintColor: "#6B7CFF",
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
