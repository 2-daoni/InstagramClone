import React, {useContext} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabContext} from 'store/context/bottomTabContext';
import {ScreenList} from 'types/ScreenTypes';
import HomeScreen from 'features/home/screens/HomeScreen';
import StoryScreen from 'features/story/screens/StoryScreen';
import FindScreen from 'features/find/screens/FindScreen';
import ShortsScreen from 'features/shorts/screens/ShortsScreen';
import ShopScreen from 'features/shop/screens/ShopScreen';
import MyScreen from 'features/user/screens/MyScreen';
import styled, {css} from 'styled-components/native';

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

const Route = () => {
  const bottomTabContext = useContext(BottomTabContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          bottomTabContext.showBottom
            ? {...tabBarOptions}
            : {...tabBarOptions, tabBarStyle: {display: 'none'}}
        }>
        <Tab.Screen
          name="Screens"
          component={Screens}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconStyle source={require('assets/images/home.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="FindScreen"
          component={FindScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconStyle source={require('assets/images/search.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="ShortsScreen"
          component={ShortsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconStyle source={require('assets/images/video.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="ShopScreen"
          component={ShopScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconStyle source={require('assets/images/bag.png')} />
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
                source={require('assets/images/dog.jpeg')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const IconStyle = styled.Image<{
  width?: string;
  height?: string;
  profile?: boolean;
}>`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  ${props =>
    props.profile &&
    css`
      border-radius: 15px;
    `}
`;

export default Route;
