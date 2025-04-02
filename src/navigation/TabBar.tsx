import { Pressable } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from "@/screens/Home"
import Center from "@/screens/Center"
import User from "@/screens/User"
const Tab = createBottomTabNavigator()

const tabBar = [
    {
        name: "Home",
        title: "首页",
        component: Home,
        icon: <Ionicons name="home-outline" size={20} />,
        selectIcon: <Ionicons name="home-outline" size={20} color="#007aff" />,
    },
    {
        name: "Center",
        title: "中心",
        component: Center,
        icon: <Ionicons name="grid-outline" size={20} />,
        selectIcon: <Ionicons name="grid-outline" size={20} color="#007aff" />,
    },
    {
        name: "User",
        title: "我的",
        component: User,
        icon: <Ionicons name="person-outline" size={20} />,
        selectIcon: <Ionicons name="person-outline" size={20} color="#007aff" />,
    },
]

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: "center",
            tabBarLabelStyle: { fontSize: 12 },
            tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} /> // 禁用水波纹
        }}>
            {tabBar.map((item) =>
                <Tab.Screen key={item.name} name={item.name} component={item.component}
                    options={{
                        title: item.title,
                        tabBarLabel: item.title,
                        tabBarIcon: ({ focused }) => focused ? item.selectIcon : item.icon,
                    }}
                />
            )}
        </Tab.Navigator>
    )
}