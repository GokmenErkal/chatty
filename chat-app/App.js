import { Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const handleSettings = () => {
    navigation.navigate('SettingsPage')
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize: 24}}>Home</Text>
      <Button title='Settings ->' onPress={handleSettings}/>
    </SafeAreaView>
  )

}
const Settings = ({navigation}) => {
  const handleHome = () => {
    navigation.navigate('HomePage')
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize: 18}}>Settings</Text>
      <Button title='Home' onPress={handleHome}/>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomePage' component={Home} />
        <Stack.Screen name='SettingsPage' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


