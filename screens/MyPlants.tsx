import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const plants = {
  plant1: {
    name: "plant one",
    type: "type one",
  },
  plant2: {
    name: "plant two",
    type: "type two",
  },
};

const MyPlants = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
    >
      {Object.entries(plants).map(([key, val]) => (
        <View style={styles.plantContainer} key={key}>
          <View style={styles.plantHeader}>
            <Text style={styles.plantHeaderName}>{val.name}</Text>
          </View>
          <View style={styles.plantInfoContainer}>
            <View style={styles.plantPic}>IMAGE</View>
            <View style={styles.plantInfo}>
              Name: <Text style={styles.plantName}>{val.name}</Text>
              Type: <Text style={styles.plantType}>{val.type}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingTop: 40,
    alignItems: "center",
    gap: 15,
  },
  plantContainer: {
    backgroundColor: "#9EBC9E",
    width: "65%",
  },
  plantHeader: {
    borderBottomColor: "#6E6362",
    borderBottomWidth: 1,
  },
  plantHeaderName: {
    color: "#6E6362",
    fontSize: 20,
    textAlign: "center",
  },
  plantInfoContainer: {
    flexDirection: "row",
  },
  plantInfo: {
    width: "50%",
    padding: 5,
  },
  plantPic: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  plantName: { color: "#6E6362", fontSize: 15 },
  plantType: { color: "#6E6362", fontSize: 15 },
});

export default MyPlants;
