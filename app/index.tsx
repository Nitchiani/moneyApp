import Buttons from "@/components/Buttons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../assets/images/backgroundImage.png"),
    title: "Save your money conveniently.",
    bio: "Get 5% cash back for each transaction and spend it easily.",
    buttonText: "Next",
  },
  {
    id: "2",
    image: require("../assets/images/backgroundImage2.png"),
    title: "Secure your money for free and get rewards.",
    bio: "Get the most secure payment app ever and enjoy it.",
    buttonText: "Next",
  },
  {
    id: "3",
    image: require("../assets/images/backgroundImage3.png"),
    title: "Enjoy commission-free stock trading.",
    bio: "Online investing has never been easier than it is right now.",
    buttonText: "Get Started",
  },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      router.push("/signUp");
      return;
    }
    flatListRef.current?.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.backgroundImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
          );
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.texts}>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.bio}>{slides[currentIndex].bio}</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={
                index === currentIndex ? styles.activeDot : styles.inActiveDot
              }
            />
          ))}
        </View>
        <View style={styles.button}>
          <Buttons
            text={slides[currentIndex].buttonText}
            variant="blue"
            onPress={handleNext}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 90,
  },
  background: {
    position: "absolute",
    width: 470,
    height: 470,
    bottom: 0,
    left: -133,
    backgroundColor: "#F5F6FA",
    borderRadius: 470,
    zIndex: 0,
  },
  logo: {
    width: 55,
    height: 53,
    resizeMode: "contain",
    alignSelf: "center",
  },
  slide: {
    width: screenWidth,
    alignItems: "center",
  },
  slideContent: {
    position: "relative",
    alignItems: "center",
  },
  backgroundImage: {
    width: 280,
    height: 202,
    resizeMode: "cover",
    position: "absolute",
    top: 60,
    zIndex: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 36,
    color: "#2743FD",
    width: screenWidth * 0.6,
  },
  bio: {
    color: "#7C2AFF",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 28,
    width: screenWidth * 0.6,
  },
  texts: {
    paddingTop: 0,
    paddingHorizontal: 30,
    flex: 1,
    gap: 26,
    zIndex: 1,
  },
  dots: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  activeDot: {
    backgroundColor: "#2A46FF",
    width: 22,
    height: 5,
    borderRadius: 2.5,
  },
  inActiveDot: {
    backgroundColor: "#B5BFFF",
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  bottomSection: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    zIndex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
  },
  button: {
    width: 203,
  },
});
