import Buttons from "@/components/Buttons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleForgotPassword = () => {
    router.push("/otp");
  };

  // Validation states
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  // Keyboard state
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, []);

  // Email validation function
  const validateEmail = (text: string) => {
    setEmail(text);
    if (text.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(text));
    } else {
      setEmailError(false);
    }
  };

  // Password validation function
  const validatePassword = (text: string) => {
    setPassword(text);
    const hasSpecialChars = /[!@*]/.test(text);
    setPasswordError(!hasSpecialChars);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
      >
        <Image
          source={require("../assets/images/background2.png")}
          style={[
            styles.backgroundImage,
            keyboardVisible && styles.backgroundImageKeyboard,
          ]}
        />
        <Text style={[styles.title, keyboardVisible && styles.titleKeyboard]}>
          Sign In
        </Text>
        <View style={[styles.inputs, keyboardVisible && styles.inputsKeyboard]}>
          <View style={styles.inputContainer}>
            {email.length > 0 && (
              <Text style={styles.label}>Email Address</Text>
            )}
            <TextInput
              value={email}
              onChangeText={validateEmail}
              style={[styles.input, emailError && styles.inputError]}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email Address"
              placeholderTextColor="#999"
            />
            {email.length > 0 && !emailError && (
              <Text style={styles.checkmark}>✓</Text>
            )}
            {emailError && (
              <Text style={styles.errorText}>
                The email address is incomplete.
              </Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            {password.length > 0 && <Text style={styles.label}>Password</Text>}
            <View style={styles.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={validatePassword}
                style={[
                  styles.input,
                  styles.passwordInput,
                  passwordError && styles.inputError,
                ]}
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
            {passwordError && (
              <Text style={styles.errorText}>
                Must contain special characters - !, @, *
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, keyboardVisible && styles.buttonKeyboard]}>
          <Buttons
            text="Sign Up"
            variant="blue"
            onPress={() => router.push("/profile")} // Navigate to /profile on button press
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    width: 435,
    height: 400,
    top: -99,
    left: -62,
  },
  backgroundImageKeyboard: {},
  title: {
    top: 311,
    fontWeight: "700",
    fontSize: 28,
    marginHorizontal: 35,
    color: "rgba(58, 58, 58, 1)",
  },
  titleKeyboard: {
    top: 311,
  },
  button: {
    bottom: 75,
  },
  buttonKeyboard: {
    bottom: 0,
  },
  inputs: {
    marginTop: 114,
    gap: 25,
    marginHorizontal: 35,
  },
  inputsKeyboard: {
    marginTop: 40,
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
  inputError: {
    borderBottomColor: "#FF0000",
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
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "400",
  },
});

export default SignUp;
