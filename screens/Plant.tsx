import Footer from "@/components/Footer";
import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Plant = ({ route }) => {
  const { id, navigation } = route.params;
  const { plants } = usePlantStore();
  const plant = plants.find((el) => el.id === id);

  return (
    <View style={styles.plantContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Plant Name: {plant?.name}</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.type}>Plant Type: {plant?.type}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Plant Info:{plant?.info}</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  plantContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  text: {
    backgroundColor: "lightgrey",
  },

  headerContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },

  header: {
    fontSize: 35,
    fontWeight: "bold",
  },

  typeContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },

  type: {
    fontSize: 25,
  },

  infoContainer: {
    height: "auto",
    width: "90%",
    backgroundColor: "grey",
  },
});

export default Plant;
