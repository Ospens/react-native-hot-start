import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routing";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: ProfileScreenRouteProp;
}
