import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import Header from '../container/Header';
import PostContainer from '../container/PostContainer';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container>
      <Header />
      <PostContainer />
    </Container>
  );
};

const Container = styled.View``;

export default HomeScreen;
