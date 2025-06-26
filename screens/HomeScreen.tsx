import HomeScreenButton from "@/components/HomeScreenButton";
import MainHeader from "@/components/MainHeader";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const navButtons = ["home", "My Plants", "Add Plant", "Remove Plant"];

const HomeScreen = () => {
  const [count, increment] = useState(0);

  const handlePress = () => {
    increment(count + 1);
  };

  return (
    <View style={styles.fullContainer}>
      <MainHeader />
      <View style={styles.viewComponet}>
        <View style={styles.navButtons}>
          {navButtons.map((button) => (
            <HomeScreenButton
              text={button}
              handlePress={handlePress}
              key={button}
            />
          ))}
        </View>
        <Text>{count}</Text>
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
