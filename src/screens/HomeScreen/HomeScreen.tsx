import React, { memo } from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenProps } from "./HomeScreen.types";
import styles from "./HomeScreen.styles";

const HomeScreen = memo(({ navigation }: HomeScreenProps) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Another"
      onPress={() =>
        navigation.navigate("Another", {
          someParam: "latest",
        })}
    />
  </View>
));

export default HomeScreen;
