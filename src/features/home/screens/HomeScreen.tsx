import styled from 'styled-components/native';
import StoryListContainer from '../container/StoryListContainer';
import PostContainer from '../container/PostContainer';
import {storyData} from 'assets/data/storyData';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container>
      <StoryListContainer storyItems={storyData} />
      <PostContainer />
    </Container>
  );
};

const Container = styled.View`
  padding: 50px 0 0 0;
`;

export default HomeScreen;
