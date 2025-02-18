export default [
    {
        name: "TabBar",
        component: require("./TabBar").default,
        options: {
            headerShown: false
        }
    },
    {
        name: "Detail",
        component: require("@/screens/Detail").default,
        options: {
            title: "详情"
        }
    },
]