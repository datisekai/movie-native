import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import IconMUI from "react-native-vector-icons/MaterialIcons";
import Home from "../screens/Home";
import ComingSoon from "../screens/ComingSoon";
import Profile from "../screens/Profile";
import { primary } from "../theme/themeColor";

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        headerShown: false,
        tabBarActiveTintColor: primary.main,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name='home'
              size={25}
              style={[styles.button, focused && styles.buttonActive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.text, focused && styles.textActive]}>
              Home
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name='Coming Soon'
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconMUI
              name='movie'
              size={25}
              style={[styles.button, focused && styles.buttonActive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.text, focused && styles.textActive]}>
              Coming Soon
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name='user'
              size={25}
              style={[styles.button, focused && styles.buttonActive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.text, focused && styles.textActive]}>
              Profile
            </Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    color: primary[50],
    backgroundColor: "transparent",
  },
  buttonActive: {
    color: primary.main,
  },
  text: {
    color: primary[50],
  },
  textActive: {
    color: primary.main,
  },
});
