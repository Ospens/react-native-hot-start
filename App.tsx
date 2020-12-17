import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./src/routing";

const App = () => (
  <NavigationContainer>
    <Routing />
  </NavigationContainer>
);

export default App;
