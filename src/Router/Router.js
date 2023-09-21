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
import ShopRouter from "./Shop/ShopRouter";
import Login from "../screen/Login";
import Signup_1 from "../screen/Sginup/Signup_1";
import Signup_2 from "../screen/Sginup/Signup_2";
import Signup_3 from "../screen/Sginup/Signup_3";
import Signup_4 from "../screen/Sginup/Signup_4";
import Signup_finish from "../screen/Sginup/Signup_finish";

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
        <Stack.Screen name="Signup_1" component={Signup_1} />
        <Stack.Screen name="Signup_2" component={Signup_2} />
        <Stack.Screen name="Signup_3" component={Signup_3} />
        <Stack.Screen name="Signup_4" component={Signup_4} />
        <Stack.Screen name="Signup_finish" component={Signup_finish} />
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
