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
import {StatusBar, useColorScheme} from 'react-native';
import HomeScreen from './src/features/home/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MyScreen from './src/features/user/screens/MyScreen';
import {ScreenList} from './types/ScreenTypes';
import FindScreen from './src/features/find/screens/FindScreen';
import ShortsScreen from './src/features/shorts/screens/ShortsScreen';
import StoryScreen from './src/features/story/screens/StoryScreen';
import styled, {css} from 'styled-components/native';
import ShopScreen from './src/features/shop/screens/ShopScreen';

const Stack = createStackNavigator<ScreenList>();
const Tab = createBottomTabNavigator();

const tabBarOptions: any = {
  tabBarShowLabel: false,
  headerShown: false,
};

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Screens">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{...tabBarOptions}}>
          <Tab.Screen
            name="Screens"
            component={Screens}
            options={{
              tabBarIcon: ({color, size}) => (
                <IconStyle
                  source={require('../InstagramClone/src/assets/images/home.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="FindScreen"
            component={FindScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <IconStyle
                  source={require('../InstagramClone/src/assets/images/search.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ShortsScreen"
            component={ShortsScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <IconStyle
                  source={require('../InstagramClone/src/assets/images/video.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ShopScreen"
            component={ShopScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <IconStyle
                  source={require('../InstagramClone/src/assets/images/bag.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="MyScreen"
            component={MyScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <IconStyle
                  width="30px"
                  height="30px"
                  profile={true}
                  source={require('../InstagramClone/src/assets/images/dog.jpeg')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const IconStyle = styled.Image<{
  width?: string;
  height?: string;
  profile?: boolean;
}>`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  ${props => props.profile && css`border-radius: 15px`}
`;

export default App;
