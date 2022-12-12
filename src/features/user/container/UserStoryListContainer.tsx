import {Text} from 'react-native';
import styled from 'styled-components/native';

interface StoryListType {
  id: number;
  name: string;
  highlightImage: string;
}
const StoryList: Array<StoryListType> = [
  {id: 1, name: '여행', highlightImage: 'assets/images/dog.jpeg'},
  {id: 2, name: '맛집', highlightImage: 'assets/images/tree.jpg'},
];

const UserStoryListContainer = () => {
  return (
    <ScrollContainer horizontal>
      {StoryList.map((item: StoryListType) => (
        <StoryContainer>
          <HighlightImageContainer>
            <HighlightImage source={require('assets/images/tree.jpg')} />
          </HighlightImageContainer>
          <Text>{item.name}</Text>
        </StoryContainer>
      ))}
    </ScrollContainer>
  );
};

const ScrollContainer = styled.ScrollView`
  flex-direction: row;
  max-height: 100px;
  padding: 0 10px 0 10px;
`;

const StoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin: 0 10px 0 0;
`;

const HighlightImageContainer = styled.View`
  width: 60px;
  height: 60px;
  border-width: 1px;
  border-color: #9e9c9c;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 0 5px 0;
`;

const HighlightImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export default UserStoryListContainer;
