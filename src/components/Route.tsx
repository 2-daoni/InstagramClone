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
import SearchScreen from 'features/search/screens/SearchScreen';
import ShortsScreen from 'features/shorts/screens/ShortsScreen';
import ShopScreen from 'features/shop/screens/ShopScreen';
import MyScreen from 'features/user/screens/MyScreen';
import styled, {css} from 'styled-components/native';
import UserFollowListScreen from 'features/user/screens/UserFollowListScreen';
import PostReplyDetailScreen from 'features/post/screens/PostReplyDetailScreen';
import PostDetailScreen from 'features/post/screens/PostDetailScreen';
import UserScreen from 'features/user/screens/UserScreen';

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
      <Stack.Screen
        name="PostReplyDetailScreen"
        component={PostReplyDetailScreen}
        options={{
          headerTitle: '댓글',
          headerBackTitleVisible: false,
          headerTintColor: '#111',
        }}
      />
      <Stack.Screen
        name="UserFollowListScreen"
        component={UserFollowListScreen}
        options={{
          headerTitle: '_2da1_',
          headerBackTitleVisible: false,
          headerTintColor: '#111',
        }}
      />
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{
          headerTitle: '게시글',
          headerBackTitleVisible: false,
          headerTintColor: '#111',
        }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#111',
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
            ? {
                ...tabBarOptions,
              }
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
          name="SearchScreen"
          component={SearchScreen}
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
