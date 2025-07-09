import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyPlants from "./MyPlants";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.fullContainer}>
      <ScrollView
        style={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <MainHeader />
        <MyPlants navigation={navigation} />
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 15,
  },
});

export default HomeScreen;
