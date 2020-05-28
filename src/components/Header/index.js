import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Livros</Text>
      <FontAwesome5 name="search" size={40} color="#33333395" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 20,
  },
  text: {
    color: "#33333395",
    fontSize: 40,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
});
