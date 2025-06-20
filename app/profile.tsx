import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <LinearGradient
      colors={["#4950F9", "#1937FE"]}
      start={{ x: -0.1249, y: 0 }}
      end={{ x: 1.1502, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/backArrow.png")}
          style={styles.back}
        />
        <View style={styles.contentContainer}>
          <Image
            source={require("../assets/images/uploadProfile.png")}
            style={styles.upload}
          />

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Your username"
                placeholderTextColor="#80E0FF"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your name"
                placeholderTextColor="#80E0FF"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your last name"
                placeholderTextColor="#80E0FF"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date Of Birth</Text>
              <TextInput
                style={styles.input}
                placeholder="Your birthday (dd-mm-yyyy)"
                placeholderTextColor="#80E0FF"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  upload: {
    width: 143,
    height: 143,
    alignSelf: "center",
    marginBottom: 40,
  },
  back: {
    width: 26,
    height: 21,
    position: "absolute",
    left: 30,
    top: 60,
  },
  formContainer: {
    width: "100%",
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    color: "#80E0FF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 0,
    fontSize: 16,
    color: "white",
  },
  completeButton: {
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 40,
  },
  completeButtonText: {
    color: "#4950F9",
    fontSize: 16,
    fontWeight: "600",
  },
});
