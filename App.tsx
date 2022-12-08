/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/features/home/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MyScreen from './src/features/user/screens/MyScreen';
import {ScreenList} from './types/ScreenTypes';
import FindScreen from './src/features/find/screens/FindScreen';
import ShortsScreen from './src/features/shorts/screens/ShortsScreen';
import Icon from 'react-native-vector-icons';
import StoryScreen from './src/features/story/screens/StoryScreen';

const Stack = createStackNavigator<ScreenList>();
const Tab = createBottomTabNavigator();

const tabBarOptions: any = {
  tabBarShowLabel: false,
};

const Screens = () => {
  // tab, stack 구조 바꾸기 (포함관계 반대로)
  return (
    <>
      <Tab.Navigator screenOptions={{...tabBarOptions}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="FindScreen" component={FindScreen} />
        <Tab.Screen name="ShortsScreen" component={ShortsScreen} />
        <Tab.Screen name="MyScreen" component={MyScreen} />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screens">
          <Stack.Screen
            name="Screens"
            component={Screens}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StoryScreen"
            component={StoryScreen}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
