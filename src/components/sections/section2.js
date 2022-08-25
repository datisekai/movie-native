import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardCategory from "../Card/CardCategory";
import { primary, secondary } from "../../theme/themeColor";

export default function Section2({ data }) {
  return (
    <View style={styles.category}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Category</Text>
        <Text style={styles.categorySeeMore}>See More</Text>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <CardCategory {...item} index={index} />
        )}
        contentContainerStyle={styles.categoryList}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    paddingVertical: 16,
    backgroundColor: secondary.main,
    paddingHorizontal: 8,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryTitle: {
    color: primary[50],
    fontWeight: "bold",
    fontSize: 18,
  },
  categorySeeMore: {
    color: primary.main,
    fontWeight: "bold",
    fontSize: 15,
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 16,
  },
});
