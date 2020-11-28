import React from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>React Native Hot Start</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default App;
