import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.mainText}>My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    justifyContent: "center",
  },
  mainText: {
    color: "#6E6362",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MainHeader;
