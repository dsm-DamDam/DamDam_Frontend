import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/common/TabBar";

import Home from "../screen/Home";
import Calender from "../screen/Calender";
import Diary from "../screen/Diary";
import ProfileRouter from "./ProfileRouter";
import ShopRouter from "./Shop/ShopRouter";
import { createStackNavigator } from "@react-navigation/stack";

export default function TabRouter() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      // tabBar={() => <TabBar />}
    >
      <Stack.Screen name="Calender" component={Calender} />
      <Stack.Screen name="Diary" component={Diary} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Shop" component={ShopRouter} />
      <Stack.Screen name="Profile" component={ProfileRouter} />
    </Stack.Navigator>
  );
}
