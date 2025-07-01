import useNavStore from "@/hooks/useNavStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = () => {
  const { changeScreen, screenName } = useNavStore();
  const navStore = useNavStore();

  return (
    <View style={styles.footerContainer}>
      {screenName === "home" ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => changeScreen("add")}
        >
          <Text style={styles.addButtonPlus}>+</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navStore.goHome()}
        >
          <Text style={styles.backButtonSign}>{"<"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 100,
    width: "100%",
  },
  backButton: {
    width: 60,
    height: 60,
    backgroundColor: "#9EBC9E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: "5%",
  },
  backButtonSign: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#9EBC9E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: "80%",
  },
  addButtonPlus: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
  },
});

export default Footer;
