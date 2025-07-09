import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = ({ navigation }) => {
  const { removePlant, selected } = usePlantStore();

  const handleDelete = () => {
    removePlant(selected);
    navigation.navigate("home");
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("addPlant")}
      >
        <Text style={styles.addButtonText}>Add Plant</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete()}
      >
        <Text style={styles.deleteText}>{"DELETE"}</Text>
      </TouchableOpacity>
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
    width: 110,
    height: 60,
    backgroundColor: "#9EBC9E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: "auto",
  },

  addButtonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
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
