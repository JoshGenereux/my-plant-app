import usePlantStore from "@/hooks/usePlantStore";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const NewPlant = () => {
  const { addPlant } = usePlantStore();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = () => {
    addPlant({ name, type, info });

    setName("");
    setType("");
    setInfo("");
  };

  return (
    <View style={styles.fullContainer}>
      <Text>Name:</Text>
      <TextInput
        style={styles.nameInput}
        defaultValue={name}
        onChangeText={(name) => setName(name)}
      ></TextInput>
      <Text>Type:</Text>
      <TextInput
        style={styles.nameInput}
        defaultValue={type}
        onChangeText={(type) => setType(type)}
      ></TextInput>
      <Text>Info:</Text>
      <TextInput
        style={styles.nameInput}
        defaultValue={info}
        onChangeText={(info) => setInfo(info)}
      ></TextInput>
      <Button title={"Submit"} onPress={handleSubmit} />
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
