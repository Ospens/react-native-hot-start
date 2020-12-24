import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Another: { someParam: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export interface IHomeScreenNavigationProps {
  navigation: HomeScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

type AnotherScreenNavigation = StackNavigationProp<
  RootStackParamList,
  "Another"
>;

type AnotherScreenRoute = RouteProp<RootStackParamList, "Another">;

export interface IAnotherScreenNavigationProps {
  navigation: AnotherScreenNavigation;
  route: AnotherScreenRoute;
}
