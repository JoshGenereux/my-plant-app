import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TestScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button Pressed!")}
      >
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center", // ✅ Center vertically
    alignItems: "center", // ✅ Center horizontally
    padding: 20,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
