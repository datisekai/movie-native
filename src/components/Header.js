import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { primary } from "../theme/themeColor";

export default function Header() {
  const categoryList = useMemo(() => {
    return ["TV Shows", "Movies", "My List"];
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.logo}>D</Text>
        <Icon name='search1' style={styles.icon} size={25} />
      </View>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <Text style={styles.textCategory}>{item}</Text>
        )}
        numColumns={3}
        contentContainerStyle={styles.category}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: primary.main,
  },
  icon: {
    color: primary[50],
  },
  textCategory: {
    color: primary[50],
    fontWeight: "bold",
    fontSize: 14,
    flex: 1,
    textAlign: "center",
  },
  category: {
    justifyContent: "space-between",
    marginTop: 8,
  },
});
