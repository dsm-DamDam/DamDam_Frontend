import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopHeader from "../../components/Shop/Header";
import Buy from "../../screen/Shop/Buy";
import MyGift from "../../screen/Shop/MyGift";
import GoodsRouter from "./GoodsRouter";
import MyGiftRouter from "./MyGiftRouter";

export default function ShopRouter() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="MyGift"
      screenOptions={{
        headerShown: true,
        headerMode: "float",
        header: () => <ShopHeader />,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Screen
        name="Buy"
        component={GoodsRouter}
        options={{ title: "구매하기" }}
      />
      <Tab.Screen
        name="MyGift"
        component={MyGiftRouter}
        options={{ title: "내 상품권" }}
      />
    </Tab.Navigator>
  );
}
