import useNavStore from "@/hooks/useNavStore";
import usePlantStore from "@/hooks/usePlantStore";
import { Plant } from "@/types/types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyPlants = () => {
  const { plants, selectPlant } = usePlantStore();
  const navStore = useNavStore();

  const handlePress = (plant: Plant) => {
    selectPlant(plant.id);
    navStore.changeScreen("plant");
  };

  return (
    <View style={styles.plants}>
      {plants.map((plant) => (
        <TouchableOpacity
          style={styles.plantContainer}
          key={plant.id}
          onPress={() => {
            handlePress(plant);
          }}
        >
          <View style={styles.nameBox}>
            <Text style={styles.id}>{plant.id}</Text>
            <Text style={styles.name}>{plant.name}</Text>
          </View>
          <View style={styles.typeBox}>
            <Text style={styles.plantTypeHeader}>Plant Type:</Text>
            <Text style={styles.plantType}>{plant.type}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.plantInfoHeader}>Info:</Text>
            <Text style={styles.plantInfo}>{plant.info}</Text>
          </View>
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
    width: "90%",
    height: 350,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#6E6362",
  },

  nameBox: {
    width: "100%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#6E6362",
    flexDirection: "row",
    paddingLeft: 10,
  },

  name: {
    fontWeight: "bold",
    fontSize: 25,
    flex: 1,
    textAlign: "center",
  },

  id: {
    width: 15,
  },

  typeBox: {
    width: "100%",
    height: 25,
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
    paddingLeft: 10,
  },

  plantTypeHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },

  plantType: {},

  infoBox: {
    borderWidth: 1,
    width: "40%",
    flex: 1,
    paddingLeft: 10,
    marginTop: 5,
  },

  plantInfoHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },

  plantInfo: {},
});

export default MyPlants;
