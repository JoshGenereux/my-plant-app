import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>My Plant App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  mainText: {
    color: "green",
    fontSize: 20,
  },
});
