import React from "react";
import { StyleSheet, View } from "react-native";
import menu from "../assets/menu.jpg";

export default function Home() {
  return (
    <View style={styles.main}>
      <View style={styles.navbar}></View>

      <View style={styles.slide}></View>

      <View style={styles.categories}></View>

      <View style={styles.lists}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  navbar: {},
  slide: {},
  categories: {},
  lists: {},
});
