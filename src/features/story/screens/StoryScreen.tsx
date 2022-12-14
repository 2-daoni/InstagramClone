import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {Image} from 'react-native';
import {BottomTabContext} from 'store/context/bottomTabContext';
import styled from 'styled-components/native';

const StoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<any>>();
  const storyInfo = route.params;
  const bottomTabContext = useContext(BottomTabContext);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      bottomTabContext.setIsBottomShow(false);
    });
    const onBlur = navigation.addListener('blur', () => {
      bottomTabContext.setIsBottomShow(true);
    });
    return () => {
      onFocus();
      onBlur();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  }, []);

  return (
    <>
      <Container source={require('assets/images/tree.jpg')}>
        <StoryHeader>
          <Image
            style={{width: 30, height: 30}}
            source={storyInfo?.userInfo.porifleImage}
          />
          <UserName>{storyInfo?.userInfo.name}</UserName>
        </StoryHeader>
      </Container>
    </>
  );
};

const Container = styled.ImageBackground`
  flex: 1;
  background-image: url('assets/images/dog.jpeg');
  background-size: cover;
`;

const StoryHeader = styled.View`
  padding: 50px 30px;
  flex-direction: row;
  z-index: 2;
`;

const UserName = styled.Text`
  color: white;
  font-size: 16px;
`;

export default StoryScreen;
