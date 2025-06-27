import HomeScreenButton from "@/components/HomeScreenButton";
import MainHeader from "@/components/MainHeader";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MyPlants from "./MyPlants";

const navButtons = ["home", "My Plants", "Add Plant", "Remove Plant"];

const HomeScreen = () => {
  const [screen, setScreen] = useState("home");

  const handlePress = (key: string) => {
    setScreen(key);
  };

  return (
    <View style={styles.fullContainer}>
      <MainHeader homePress={() => setScreen("home")} />
      <View style={styles.viewComponet}>
        {screen === "home" && (
          <View style={styles.navButtons}>
            {navButtons.map((button) => (
              <HomeScreenButton
                text={button}
                handlePress={() => handlePress(button)}
                key={button}
              />
            ))}
          </View>
        )}
        {screen === "My Plants" && <MyPlants />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",
  },
  viewComponet: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightgrey",
    alignItems: "center",
  },
  navButtons: {
    flex: 0.5,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default HomeScreen;
