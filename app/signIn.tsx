import Buttons from "@/components/Buttons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background2.png")}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputs}>
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />
      </View>
      <View style={styles.button}>
        <Buttons text="Sign In" variant="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: 435,
    height: 400,
    top: -99,
    left: -62,
  },
  container: {
    position: "relative",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    top: 331,
    fontWeight: "700",
    fontSize: 28,
    marginHorizontal: 40,
  },
  button: {
    bottom: 75,
  },
  inputs: { marginTop: 47, gap: 40 },
  input: {
    marginHorizontal: 35,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#2743FD",
  },
});
export default SignIn;
