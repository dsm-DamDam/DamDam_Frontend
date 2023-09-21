import { createStackNavigator } from "@react-navigation/stack";
import DetailGoods from "../../screen/Shop/DetailGoods";
import Buy from "../../screen/Shop/Buy";

export default function GoodsRouter() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="BuyList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BuyList" component={Buy} />
      <Stack.Screen name="DetailGoods" component={DetailGoods} />
    </Stack.Navigator>
  );
}
