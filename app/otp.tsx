import OtpButton from "@/components/OtpButton";
import { useRouter } from "expo-router"; // Import useRouter
import React, { useRef, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const router = useRouter(); // Initialize useRouter

  const handleGetOtp = () => {
    setIsOtpSent(true);
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    // You can add OTP verification logic here
    router.push("/home"); // Navigate to /home after OTP verification
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/otp.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.bio}>
          {isOtpSent
            ? `Enter the OTP sent to ${phoneNumber || "+995 555 551 452"}`
            : "We will send you a one-time password to this mobile number"}
        </Text>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>
            {isOtpSent ? "" : "Enter Mobile Number"}
          </Text>
          <View
            style={[
              styles.inputContainer,
              !isOtpSent && styles.inputContainerWithBorder,
            ]}
          >
            {!isOtpSent ? (
              <View style={styles.inputWrapper}>
                <TextInput
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  style={styles.input}
                  keyboardType="number-pad"
                  placeholder="+995 555 551 452"
                  placeholderTextColor="rgba(153, 153, 153, 0.7)"
                  textAlign="center"
                  textAlignVertical="center"
                  maxLength={16}
                  {...(Platform.OS === "android"
                    ? { includeFontPadding: false }
                    : {})}
                />
              </View>
            ) : (
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={otpRefs[index]}
                    value={digit}
                    onChangeText={(value) => handleOtpChange(value, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    style={[
                      styles.otpInput,
                      digit ? styles.otpInputActive : styles.otpInputInactive,
                    ]}
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    textAlignVertical="center"
                    {...(Platform.OS === "android"
                      ? { includeFontPadding: false }
                      : {})}
                  />
                ))}
              </View>
            )}
          </View>
          {isOtpSent && (
            <TouchableOpacity style={styles.resendContainer}>
              <Text style={styles.resendText}>
                Didn&apos;t you receive the OTP?{" "}
                <Text style={styles.resendLink}>Resend OTP</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <OtpButton
        text={isOtpSent ? "Verify" : "Get OTP"}
        onPress={isOtpSent ? handleVerify : handleGetOtp} // Update onPress to handleVerify when OTP is sent
      />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 50,
    paddingVertical: 56,
  },
  imageWrapper: {
    marginTop: 56,
  },
  image: {
    width: 257,
    height: 269,
  },
  texts: {
    gap: 28,
    paddingHorizontal: 40,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
    color: "#3A3A3A",
  },
  bio: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },
  inputSection: {
    width: "100%",
    alignItems: "center",
  },
  inputLabel: {
    color: "#B9B9B9",
    fontSize: 12,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputContainerWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(39, 67, 253, 1)",
  },
  inputWrapper: {
    height: 40,
    justifyContent: "center",
    width: "80%",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  otpInput: {
    width: 48,
    height: 48,
    fontSize: 24,
    color: "#333",
    textAlign: "center",
    textAlignVertical: "center",
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  otpInputInactive: {
    borderBottomColor: "rgba(185, 185, 185, 1)",
  },
  otpInputActive: {
    borderBottomColor: "rgba(39, 67, 253, 1)",
  },
  resendContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  resendText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  resendLink: {
    color: "rgba(39, 67, 253, 1)",
    textDecorationLine: "none",
  },
});
