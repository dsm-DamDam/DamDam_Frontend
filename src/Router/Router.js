import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "../components/common/TabBar";
import { StatusBar } from "react-native";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Shop from "../screen/Shop";
import Calender from "../screen/Calender";
import Diary from "../screen/Diary";
<<<<<<< HEAD
import Login from "../screen/login/login";
=======
import ShopRouter from "./Shop/ShopRouter";
>>>>>>> main_publishing

function TabRouter() {
  const Tab = createBottomTabNavigator();

  return (
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
  );
}

export default function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator
        initialRouteName="Login"
=======
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Shop"
>>>>>>> main_publishing
        screenOptions={{
          headerShown: false,
        }}
      >
<<<<<<< HEAD
        <Stack.Screen name="TabRouter" component={TabRouter} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
=======
        <Tab.Screen name="Calender" component={Calender} />
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shop" component={ShopRouter} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
>>>>>>> main_publishing
    </NavigationContainer>
  );
}
