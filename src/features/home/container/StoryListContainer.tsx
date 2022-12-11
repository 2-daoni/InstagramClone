import {StoryTypes} from 'types/commonTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {useContext} from 'react';
import {Context} from 'store/context/context';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({storyItems}: any) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const showContext = useContext(Context);

  const handleShowStory = (id: number) => {
    showContext.addShowStory(id);
  };

  return (
    <Container>
      {storyItems.map((item: StoryTypes) => (
        <StoryItem
          key={item.id}
          onPress={() => {
            navigation.navigate('StoryScreen', {
              id: item.id,
              userInfo: item.userInfo,
              storyImage: item.storyImage,
            });
            handleShowStory(item.id);
          }}>
          <StoryImage
            style={
              showContext.storyIds.includes(item.id)
                ? styles.isShow
                : styles.isNotShow
            }
            source={require('assets/images/dog.jpeg')}
          />
          <UserName>{item.userInfo.name}</UserName>
        </StoryItem>
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  isShow: {
    borderColor: '#d9d9d9',
  },
  isNotShow: {
    borderColor: 'red',
  },
});

const RainbowImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  overflow: hidden;
  padding: 3px;
  background-color: linear-gradient(
    45deg,
    rgb(255, 230, 0),
    rgb(255, 0, 128) 80%
  );
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex-direction: row;
  padding: 10px 0 10px 0;
  border-bottom-width: 1px;
  border-color: #cfcfcf;
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
  border-width: 2px;
`;

const UserName = styled.Text`
  margin: 3px 0 0 0;
`;

export default Header;
