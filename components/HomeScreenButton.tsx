import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type buttonText = {
  text: string;
};

const HomeScreenButton = (props: buttonText) => {
  const { text } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        alert("pressed");
        console.log("pressed");
      }}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "45%",
    height: 45,
    backgroundColor: "#9EBC9E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 25,
    color: "#6E6362",
  },
});

export default HomeScreenButton;
