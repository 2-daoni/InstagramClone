import {StoryTypes} from 'types/commonTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useContext, useState} from 'react';
import {Context} from 'store/context/context';
import {StyleSheet} from 'react-native';
import {userData} from 'assets/data/userData';
import {launchImageLibrary} from 'react-native-image-picker';
import styled from 'styled-components/native';

const Header = ({storyItems}: any) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const showContext = useContext(Context);

  const [MeStory, setMeStory] = useState<boolean>(false);

  const Me = userData.find(item => item.id === 1);

  const handleShowStory = (id: number) => {
    showContext.addShowStory(id);
  };

  const handlePressMyStory = async () => {
    if (!MeStory) {
      const result = await launchImageLibrary({mediaType: 'mixed'});
      if (result.assets) {
        setMeStory(true);
      } else if (result.didCancel) {
        setMeStory(false);
      }
    } else {
      navigation.navigate('StoryScreen');
    }
  };

  const getPlusImg = () => {
    if (!MeStory) {
      return <PlusImage source={require('assets/images/plus.png')} />;
    } else return;
  };

  return (
    <Container>
      <StoryItem onPress={handlePressMyStory}>
        <StoryImage
          source={require('assets/images/dog.jpeg')}
          style={MeStory ? styles.isShow : {borderWidth: 0}}
        />
        <UserName>{Me?.name}</UserName>
        {getPlusImg()}
      </StoryItem>
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
    borderColor: '#cbcbcb',
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

const PlusImage = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  right: -5px;
  top: 30px;
  border-radius: 15px;
`;

export default Header;
