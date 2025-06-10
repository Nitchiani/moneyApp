import Buttons from "@/components/Buttons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background2.png")}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          {email.length > 0 && <Text style={styles.label}>Email Address</Text>}
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            placeholderTextColor="#999"
          />
          {email.length > 0 && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.inputContainer}>
          {password.length > 0 && <Text style={styles.label}>Password</Text>}
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={[styles.input, styles.passwordInput]}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor="#999"
            />
            {password.length > 0 && (
              <IconButton
                icon={showPassword ? "eye-off" : "eye"}
                size={20}
                iconColor="#999"
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              />
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Buttons text="Sign Up" variant="blue" />
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
    backgroundColor: "#fff",
  },
  title: {
    top: 331,
    fontWeight: "700",
    fontSize: 28,
    marginHorizontal: 40,
    color: "rgba(58, 58, 58, 1)",
  },
  button: {
    bottom: 75,
  },
  inputs: {
    marginTop: 114,
    gap: 25,
    marginHorizontal: 35,
  },
  inputContainer: {
    position: "relative",
  },
  label: {
    fontSize: 14,
    color: "rgba(185, 185, 185, 1)",
    fontWeight: "400",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(39, 67, 253, 1)",
    fontSize: 14,
    color: "#333",
    outlineWidth: 0,
  },
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    margin: 0,
  },
  checkmark: {
    position: "absolute",
    right: 10,
    bottom: 12,
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "flex-start",
  },
  forgotPasswordText: {
    color: "rgba(43, 71, 252, 1)",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default SignUp;
