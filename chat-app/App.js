import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from './src/config/constants';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FlashMessage from 'react-native-flash-message';

// pages
import Chat from './src/screens/Chat/Chat';
import Chats from './src/screens/Chats';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp'
import Settings from './src/screens/Settings/Settings';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const ChatsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name='Chats'
        component={Chats}
        options={{ headerTitle: 'Sohbetler', }}
      />
      <ChatsStack.Screen
        name='Chat'
        component={Chat}
        options={{ headerTitle: 'Sohbet' }}
      />
    </ChatsStack.Navigator>
  )
}


export const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={Settings} options={{ headerTitle: 'Ayarlar' }} />
    </SettingsStack.Navigator>
  )
}

const TabScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ChatsScreen') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'SettingsScreen') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary
      })}
    >
      <Tabs.Screen
        name='ChatsScreen'
        component={ChatsScreen}
        options={{ title: 'Sohbetler', }}
      />
      <Tabs.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{ title: 'Ayarlar' }}
      />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tabs' component={TabScreen} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
      <FlashMessage position={'top'} />
      <StatusBar />
    </NavigationContainer>
  );
}


