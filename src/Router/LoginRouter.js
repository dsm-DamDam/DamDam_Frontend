import Login from "../screen/Login";
import Signup_1 from "../screen/Sginup/Signup_1";
import Signup_2 from "../screen/Sginup/Signup_2";
import Signup_3 from "../screen/Sginup/Signup_3";
import Signup_4 from "../screen/Sginup/Signup_4";
import Signup_finish from "../screen/Sginup/Signup_finish";
import { createStackNavigator } from "@react-navigation/stack";
import TabRouter from "./Router";

export default function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabRouter" component={TabRouter} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_1" component={Signup_1} />
        <Stack.Screen name="Signup_2" component={Signup_2} />
        <Stack.Screen name="Signup_3" component={Signup_3} />
        <Stack.Screen name="Signup_4" component={Signup_4} />
        <Stack.Screen name="Signup_finish" component={Signup_finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
