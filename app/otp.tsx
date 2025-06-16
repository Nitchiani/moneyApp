import OtpButton from "@/components/OtpButton";
import React, { useState } from "react";
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
  const [otp, setOtp] = useState("");

  const handleGetOtp = () => {
    setIsOtpSent(true);
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
            {isOtpSent ? "Enter OTP" : "Enter Mobile Number"}
          </Text>
          <View
            style={[
              styles.inputContainer,
              !isOtpSent && styles.inputContainerWithBorder,
            ]}
          >
            <View style={styles.inputWrapper}>
              <TextInput
                value={isOtpSent ? otp : phoneNumber}
                onChangeText={isOtpSent ? setOtp : setPhoneNumber}
                style={[styles.input, isOtpSent && styles.otpInput]}
                keyboardType="number-pad"
                placeholder={isOtpSent ? "____" : "+995 555 551 452"}
                placeholderTextColor="rgba(153, 153, 153, 0.7)"
                textAlign="center"
                textAlignVertical="center"
                maxLength={isOtpSent ? 4 : 16}
                {...(Platform.OS === "android"
                  ? { includeFontPadding: false }
                  : {})}
              />
            </View>
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
        onPress={isOtpSent ? undefined : handleGetOtp}
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
    marginTop: 20,
  },
  inputLabel: {
    color: "#B9B9B9",
    fontSize: 12,
    marginBottom: 8,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 8,
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
  otpInput: {
    fontSize: 24,
    letterSpacing: 16,
    width: "60%",
    textAlign: "center",
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
