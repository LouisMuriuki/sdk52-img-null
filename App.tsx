import './reanimatedConfig';
import "react-native-gesture-handler";
import React from "react";
import LoginScreen from "./LoginScreen";
import { View } from "react-native";

export default function App() {

  return (
    <View
    style={{
      flex: 1,
      }}
    >
      <LoginScreen />
    </View>
  );
}
