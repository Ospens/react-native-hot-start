import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routing";

type AnotherScreenNavigation = StackNavigationProp<
  RootStackParamList,
  "Another"
>;
type AnotherScreenRoute = RouteProp<RootStackParamList, "Another">;

export interface AnotherScreenProps {
  navigation: AnotherScreenNavigation;
  route: AnotherScreenRoute;
}
