import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyPlants = () => {
  const { plants } = usePlantStore();

  return (
    <View style={styles.plants}>
      {plants.map((plant) => (
        <TouchableOpacity style={styles.plantContainer} key={plant.id}>
          <Text>{plant.name}</Text>
          <Text>{plant.id}</Text>
          <Text>{plant.type}</Text>
          <Text>{plant.info}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  plants: {
    flex: 1,
    width: "100%",
    gap: 20,
    alignItems: "center",
  },

  plantContainer: {
    width: "75%",
    height: 250,
    backgroundColor: "lightgreen",
    borderRadius: 25,
    padding: 10,
  },
});

export default MyPlants;
