import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import { primary, secondary } from "../theme/themeColor";
import CardCategory from "../components/Card/CardCategory";
import Section2 from "../components/sections/section2";
import Section3 from "../components/sections/Section3";
import HomeAPI from "../components/actions/homeAPI";
import { useQuery } from "@tanstack/react-query";
import { IMAGE_300 } from "../components/config";
export default function Home() {
  const [data, setData] = useState([]);
  const [dataSection2, setDataSection2] = useState([]);

  useEffect(() => {
    const getUpcoming = async () => {
      const res = await HomeAPI.getUpComing();
      setData(res.results);
    };

    getUpcoming();

    const getGenre = async () => {
      const res = await HomeAPI.getGenreMovie();
      setDataSection2(res.genres);
    };
    getGenre();
  }, []);

  const randomIndex = useMemo(() => {
    return Math.floor(Math.random() * data.length);
  }, [data]);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: `${IMAGE_300}${
            data.length > 0
              ? data[randomIndex].poster_path || data[randomIndex].backdrop_path
              : ""
          }`,
        }}
        resizeMode='cover'
        style={styles.image}
      >
        <View style={styles.container}>
          <Header />
          <View>
            <Text>Home</Text>
          </View>
        </View>
      </ImageBackground>
      <Section2 data={dataSection2} />
      <Section3 data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: 400,
  },
  category: {
    paddingVertical: 16,
    paddingLeft: 8,
    backgroundColor: secondary.main,
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
