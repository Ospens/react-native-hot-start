import React, { memo } from "react";
import { View, Text, Button } from "react-native";
import { IAnotherScreenNavigationProps } from "routing/Routing.types";
import styles from "./AnotherScreen.styles";

const AnotherScreen = memo(({ navigation }: IAnotherScreenNavigationProps) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    <Button title="Go to Home" onPress={navigation.goBack} />
  </View>
));

export default AnotherScreen;
