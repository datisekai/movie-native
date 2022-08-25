import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { primary } from "../../theme/themeColor";
import { IMAGE_300 } from "../config";

export default function CardMovie({
  index,
  backdrop_path,
  poster_path,
  original_title,
  title,
  id,
}) {
  return (
    <View style={index !== 0 && styles.wrapper}>
      <Image
        source={{ uri: `${IMAGE_300}${backdrop_path || poster_path || ""}` }}
        style={styles.image}
        resizeMode='cover'
      />
      <Text style={styles.text}>{title || original_title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    color: primary[50],
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    textTransform: "capitalize",
    maxWidth: 150,
  },
});
