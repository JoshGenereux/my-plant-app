import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from "@/screens/HomeScreen";
import NewPlant from "@/screens/NewPlant";
import Plant from "@/screens/Plant";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addPlant"
          component={NewPlant}
          options={{ title: "Add Plant" }}
        />
        <Stack.Screen
          name="plant"
          component={Plant}
          options={{ title: "Plant..." }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
