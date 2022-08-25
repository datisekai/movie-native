import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardMovie from "../Card/CardMovie";
import { primary, secondary } from "../../theme/themeColor";

export default function Section3({ data }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.wrapperTitle}>My List</Text>
        <Text style={styles.wrapperSeeMore}>See More</Text>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item, index }) => <CardMovie {...item} index={index} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: secondary.main,
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 8,
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperTitle: {
    color: primary[50],
    fontSize: 18,
    fontWeight: "bold",
  },
  wrapperSeeMore: {
    color: primary.main,
    fontWeight: "bold",
    fontSize: 15,
  },
  list: {
    marginTop: 16,
  },
});
