/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import styled, {css} from 'styled-components/native';
import BottomTabProvider from 'store/context/bottomTabContext';
import Route from 'components/Route';
import ContextProvider from './src/store/context/context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomTabProvider>
          <ContextProvider>
            <Route />
          </ContextProvider>
        </BottomTabProvider>
      </GestureHandlerRootView>
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
  ${props =>
    props.profile &&
    css`
      border-radius: 15px;
    `}
`;

export default App;
