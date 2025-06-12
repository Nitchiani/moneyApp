import Buttons from "@/components/Buttons";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 526;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Welcome() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signIn");
  };

  const handleSignUp = () => {
    router.push("/signUp");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/background1.png")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Buttons text="Sign In" variant="blue" onPress={handleSignIn} />
        <Buttons text="Sign Up" variant="transparent" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: screenWidth,
    height: calculatedHeight,
  },
  container: {
    gap: 80,
  },
  buttonsWrapper: {
    gap: 26,
  },
});
