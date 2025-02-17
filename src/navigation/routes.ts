export default [
    {
        name: "TabBar",
        component: require("./TabBar").default,
        options: {
            headerShown: false,
            title: "明知山"
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