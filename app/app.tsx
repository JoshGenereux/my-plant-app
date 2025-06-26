import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Test App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});
