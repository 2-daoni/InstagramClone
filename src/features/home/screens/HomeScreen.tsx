import styled from 'styled-components/native';
import StoryListContainer from '../container/StoryListContainer';
import {storyData} from 'assets/data/storyData';
import PostContainer from 'features/post/container/PostContainer';
import HomeHeader from '../container/HomeHeader';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container>
      <HomeHeader />
      <StoryListContainer storyItems={storyData} />
      <PostContainer />
    </Container>
  );
};

const Container = styled.View`
  padding: 50px 0 0 0;
`;

export default HomeScreen;
