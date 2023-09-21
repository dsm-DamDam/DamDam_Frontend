import { createStackNavigator } from "@react-navigation/stack";
import MyGift from "../../screen/Shop/MyGift";
import DetailMyGift from "../../screen/Shop/DetailMyGift";

export default function MyGiftRouter() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MyGiftList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyGiftList" component={MyGift} />
      <Stack.Screen name="DetailMyGift" component={DetailMyGift} />
    </Stack.Navigator>
  );
}
