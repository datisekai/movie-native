import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { primary, secondary } from "../../theme/themeColor";

export default function CardCategory({ name, index }) {
  return (
    <View style={index !== 0 && styles.wrapper}>
      {/* <View style={styles.wrapperImage}>
        <Image
          source={require("../../assets/images/test.jpg")}
          resizeMode='cover'
          style={styles.image}
        />
      </View> */}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  wrapperImage: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: secondary[800],
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    maxWidth: 100,
    backgroundColor: secondary[800],
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 5,
  },
  wrapper: {
    marginLeft: 8,
  },
});
