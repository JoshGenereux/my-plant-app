import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import useNavStore from "@/hooks/useNavStore";
import usePlantStore from "@/hooks/usePlantStore";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyPlants from "./MyPlants";
import NewPlant from "./NewPlant";
import Plant from "./Plant";

const HomeScreen = () => {
  const { screenName } = useNavStore();
  const { selected } = usePlantStore();

  return (
    <View style={styles.fullContainer}>
      <MainHeader />
      {screenName === "home" && (
        <>
          <ScrollView
            style={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <MyPlants />
          </ScrollView>
        </>
      )}
      {screenName === "add" && <NewPlant />}
      {screenName === "plant" && <Plant id={selected} />}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: "100%",
    marginTop: 50,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
  },
});

export default HomeScreen;
