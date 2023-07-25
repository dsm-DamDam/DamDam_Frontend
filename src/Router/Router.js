import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "../components/common/TabBar";
import { StatusBar } from "react-native";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Shop from "../screen/Shop";
import Calender from "../screen/Calender";
import Diary from "../screen/Diary";

export default function TabRouter() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={() => <TabBar />}
      >
        <Tab.Screen name="Calender" component={Calender} />
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
