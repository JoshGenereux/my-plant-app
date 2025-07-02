import useNavStore from "@/hooks/useNavStore";
import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = () => {
  const navStore = useNavStore();
  const { removePlant, selected } = usePlantStore();

  const handleDelete = () => {
    removePlant(selected);
    // navStore.goHome();
  };

  return (
    <View style={styles.footerContainer}>
      {navStore.screenName === "home" && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navStore.changeScreen("add")}
        >
          <Text style={styles.addButtonPlus}>+</Text>
        </TouchableOpacity>
      )}
      {navStore.screenName === "add" && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navStore.goHome()}
        >
          <Text style={styles.backButtonSign}>{"<"}</Text>
        </TouchableOpacity>
      )}
      {navStore.screenName === "plant" && (
        <>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navStore.goHome()}
          >
            <Text style={styles.backButtonSign}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete()}
          >
            <Text style={styles.deleteText}>{"DELETE"}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 100,
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },

  backButton: {
    width: 60,
    height: 60,
    backgroundColor: "#9EBC9E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: "auto",
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
    marginLeft: "auto",
  },

  addButtonPlus: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
  },

  deleteButton: {
    width: 95,
    height: 60,
    backgroundColor: "#AA2244",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: "auto",
  },

  deleteText: {
    color: "white",
    fontSize: 20,
    lineHeight: 50,
  },
});

export default Footer;
