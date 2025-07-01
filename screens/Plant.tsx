import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type plantProps = {
  id: number;
};

const Plant = ({ id }: plantProps) => {
  const plantStore = usePlantStore();
  const plant = plantStore.plants.get(id);

  return (
    <View style={styles.plantContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{plant?.name}</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.type}>{plant?.type}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{plant?.info}</Text>
      </View>
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
