import Buttons from "@/components/Buttons";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 526;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/background1.png")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Buttons text="Sign In" variant="blue" />
        <Buttons text="Sign Up" variant="transparent" />
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
