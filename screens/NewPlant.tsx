import useNavStore from "@/hooks/useNavStore";
import usePlantStore from "@/hooks/usePlantStore";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const NewPlant = () => {
  const { addPlant } = usePlantStore();
  const { goHome } = useNavStore();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [info, setInfo] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function checkFilled(): boolean {
    const fields = { name, type, info };
    const newErrors: { [key: string]: boolean } = {};

    let valid = true;
    for (const [key, value] of Object.entries(fields)) {
      const empty = !value.trim();
      newErrors[key] = empty;
      if (empty) {
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  }

  const handleSubmit = () => {
    setHasSubmitted(true);

    // if (checkFilled()) {
    //   addPlant({ name, type, info });
    //   goHome();
    //   setName("");
    //   setType("");
    //   setInfo("");
    //   setErrors({});
    //   setHasSubmitted(false);
    // }

    addPlant({ name, type, info });
  };

  return (
    <View style={styles.fullContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          {errors.name && <Text style={styles.required}>*</Text>}
          <Text style={styles.text}>Name:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(name) => setName(name)}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          {errors.type && <Text style={styles.required}>*</Text>}
          <Text style={styles.text}>Type:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={type}
          onChangeText={(type) => setType(type)}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          {errors.info && <Text style={styles.required}>*</Text>}
          <Text style={styles.text}>Info:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={info}
          onChangeText={(info) => setInfo(info)}
        ></TextInput>
      </View>
      <Button title={"Submit"} onPress={handleSubmit} />

      {hasSubmitted && Object.values(errors).some((e) => e) && (
        <Text style={styles.required}>* fields required</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 50,
  },

  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
  },

  inputContainer: {
    width: "80%",
    marginBottom: 15,
  },

  textContainer: {
    width: "100%",
    flexDirection: "row",
  },

  required: {
    color: "red",
    fontSize: 25,
  },

  text: {
    paddingLeft: 5,
    fontSize: 25,
  },
});

export default NewPlant;
