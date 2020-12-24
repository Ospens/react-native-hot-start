import React from "react";
import { View, Text, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { HomeScreenProps } from "./HomeScreen.types";
import styles from "./HomeScreen.styles";
import { useStore } from "../../stores";

const HomeScreen = observer(({ navigation }: HomeScreenProps) => {
  const rootStore = useStore("rootStore");

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Another"
        onPress={() =>
          navigation.navigate("Another", {
            someParam: "latest",
          })}
      />
      <Button title="double" onPress={() => rootStore.increment()} />
      <Button title="reassign" onPress={() => rootStore.reassign()} />
    </View>
  );
});

export default HomeScreen;
