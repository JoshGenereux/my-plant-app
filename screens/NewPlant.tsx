import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Plant = {
  name: string;
  id: number;
  type: string;
  info: string;
  image?: ImageSourcePropType | string;
};

const NewPlant = () => {
  return (
    <View style={styles.fullContainer}>
      <Text>Name:</Text>
      <TextInput style={styles.nameInput}></TextInput>
      <Text>Type:</Text>
      <TextInput style={styles.nameInput}></TextInput>
      <Text>Info:</Text>
      <TextInput style={styles.nameInput}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",

    padding: 50,
  },
  nameInput: {
    height: 40,
    width: 200,
    borderWidth: 1,
  },
});

export default NewPlant;
