import MainHeader from "@/components/MainHeader";
import useNavStore from "@/hooks/useNavStore";
import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NewPlant from "./NewPlant";

const HomeScreen = () => {
  const { screenName, changeScreen } = useNavStore();
  const plantStore = usePlantStore();
  console.log(plantStore.plants);

  return (
    <View style={styles.fullContainer}>
      <MainHeader />
      {screenName === "home" && (
        <>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}
          ></ScrollView>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => changeScreen("add")}
          >
            <Text style={styles.addButtonPlus}>+</Text>
          </TouchableOpacity>
        </>
      )}
      {screenName === "add" && <NewPlant />}
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",
    marginTop: 50,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingTop: 40,
    alignItems: "center",
    gap: 15,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#9EBC9E",
    position: "absolute",
    bottom: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  addButtonPlus: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
  },
});

export default HomeScreen;
