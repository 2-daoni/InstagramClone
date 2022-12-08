import {Text} from 'react-native';
import {storyData} from '../../../assets/data/storyData';
import {StoryTypes} from '../../../../types/commonTypes';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Container>
      {storyData.map((item: StoryTypes) => (
        <StoryItem
          key={item.id}
          onPress={() =>
            navigation.navigate('StoryScreen', {
              id: item.id,
              userInfo: item.userInfo,
              storyImage: item.storyImage,
            })
          }>
          {/* <StoryImage source={{uri: item.userInfo.profileImage}} /> */}
          <StoryImage source={require('../../../assets/images/dog.jpeg')} />
          <UserName>{item.userInfo.name}</UserName>
        </StoryItem>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding: 0 0 5px 0;
  border-bottom-width: 1px;
`;

const StoryItem = styled.TouchableOpacity`
  justify-content: center;
  margin: 0 10px 0 10px;
  align-items: center;
`;

const StoryImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const UserName = styled.Text`
  margin: 3px 0 0 0;
`;

export default Header;
