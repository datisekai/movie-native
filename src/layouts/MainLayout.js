import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <ImageBackground
      source={require("../assets/images/dragon-ball.jpg")}
      resizeMode='cover'
      style={styles.image}
    >
      <View style={styles.container}>
        <Header />
        <View>{children}</View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
