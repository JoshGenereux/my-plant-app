import HomeScreenButton from "@/components/HomeScreenButton";
import MainHeader from "@/components/MainHeader";
import React from "react";
import { StyleSheet, View } from "react-native";

const navButtons = ["home", "My Plants", "Add Plant", "Remove Plant"];

const HomeScreen = () => {
  return (
    <View style={styles.fullContainer}>
      <MainHeader />
      <View style={styles.viewComponet}>
        <View style={styles.navButtons}>
          {navButtons.map((button) => (
            <HomeScreenButton text={button} key={button} />
          ))}
        </View>
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
  },
  navButtons: {
    flex: 0.5,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default HomeScreen;
