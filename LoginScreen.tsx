import {
  StyleSheet,
  Text,
  Image,
  View,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import Carousel from "react-native-reanimated-carousel";

// const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Login = () => {

  const imageData = [
    require("./assets/login/image1.png"),
    require("./assets/login/image2.png"),
    require("./assets/login/image3.png"),
    require("./assets/login/image4.png"),
    require("./assets/login/image5.png"),
  ];


  const { height, width } = useWindowDimensions();


  console.log(imageData);
 

  return (
    <View style={styles.maincontainer}>
      <View style={styles.top}>
        <View style={styles.topText}>
          <Text style={styles.topText1}>About us</Text>
          <Text style={styles.topText1}>Learn more</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.topImage}
            source={require("./assets/Bizplusnav.png")}
          />
        </View>
        <Text style={styles.topText}>Hello</Text>
        <Text style={styles.topText1}>assests -{">"} Images</Text>
        <Text style={styles.topText2}>not rendering </Text>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={height * 0.25}
            autoPlay={true}
            autoPlayInterval={8000}
            data={imageData}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 10,
              parallaxAdjacentItemScale: 0.5,
            }}
            scrollAnimationDuration={2500}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.carouselItemContainer}>
                <Image style={styles.carouselImage} source={item} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#1560bd",
    flexDirection: "column",
  },
  top: {
    flex: 1, // This will take 50% of the space
    justifyContent: "space-between",
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    color: "#fff",
    fontFamily: "Poppins",
  },
  topText1: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "GT_WalsheimThin",
  },
  topText2: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "GT_WalsheimBold",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  topImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 4,
    resizeMode: "cover",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItemContainer: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselImage: {
    width: width * 0.9,
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  
});
