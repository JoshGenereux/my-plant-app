import useNavStore from "@/hooks/useNavStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MainHeader = () => {
  const navStore = useNavStore();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navStore.goHome()}>
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
