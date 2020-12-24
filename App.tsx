import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./src/routing";
import { StoresProvider, stores } from "./src/stores";

const App = () => (
  <StoresProvider value={stores}>
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  </StoresProvider>
);

export default App;
