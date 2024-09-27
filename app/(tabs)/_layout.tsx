import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NativeBaseProvider, StatusBar } from 'native-base';

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import Login from "@/src/Login";

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar'
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: 'search'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  },
]

export default function Tabs() {
  return (
    <NativeBaseProvider>
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
    </NativeBaseProvider>
  )
}