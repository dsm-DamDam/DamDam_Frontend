import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screen/Profile";
import InfoPage from "../screen/UserInfoPage/InfoPage";



export default function ProfileRouter() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="ProfilePage"
            screenOptions={{
                headerShown: false,
            }}
        >
        <Stack.Screen name="ProfilePage" component={Profile}/>
        <Stack.Screen name="InfoPage" component={InfoPage}/>   
        
        
        </Stack.Navigator>
    );
}