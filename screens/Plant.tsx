import React from "react";
import { StyleSheet, Text, View } from "react-native";

type plantProps = {
  id: number;
};

const Plant = ({ id }: plantProps) => {
  return (
    <View style={styles.plantContainer}>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  plantContainer: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Plant;
