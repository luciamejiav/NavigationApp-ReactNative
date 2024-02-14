import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SecondScreen from './screens/SecondScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStacks(){
  return(
    <HomeStackNavigator.Navigator initialRouteName='HomeScreen'>
      <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen 
        name="Another" 
        component={SecondScreen}
      />
      <HomeStackNavigator.Screen 
        name="Settings" 
        component={SettingsScreen}
      />
    </HomeStackNavigator.Navigator>
  )
}

export default function MyTabs() {
  return (
    //con esto ponemos el icono de abajo que hayamos clicado en verde e iniciamos siempre la app en home
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStacks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: true //para que aparezca el header con el nombre
        }}
      />
      <Tab.Screen
        name="Another"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" size={size} color={color} />
          ),
          tabBarBadge: 3 //para las notificaciones, aparece el nº 
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          )
        }} />
    </Tab.Navigator>
  );
}