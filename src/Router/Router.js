import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/common/TabBar";

import Home from "../screen/Home";
import Calender from "../screen/Calender";
import Diary from "../screen/Diary";
import ProfileRouter from "./ProfileRouter";
import ShopRouter from "./Shop/ShopRouter";

export default function TabRouter() {
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
      <Tab.Screen name="Shop" component={ShopRouter} />
      <Tab.Screen name="Profile" component={ProfileRouter} />
    </Tab.Navigator>
  );
}
