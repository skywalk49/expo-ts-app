import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from "./routes"
const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                presentation: "card",
                headerBackTitle: "返回",
            }}>
                {routes.map((item) => <Stack.Screen key={item.name} {...item} />)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}