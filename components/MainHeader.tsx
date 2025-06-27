import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type buttonProps = {
  homePress?: () => void;
};

const MainHeader = ({ homePress }: buttonProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={homePress}>
        <Text style={styles.mainText}>My Plant App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "5%",
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
