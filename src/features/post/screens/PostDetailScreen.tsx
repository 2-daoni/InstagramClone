import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {postData} from 'assets/data/postData';
import {useContext, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {BottomTabContext} from 'store/context/bottomTabContext';
import styled from 'styled-components/native';

const PostDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<any>>();
  const postInfo = route.params;
  const currentPost = postData.find(item => item.id === postInfo?.id);
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

  return (
    <Container>
      <View>
        <PostInfoContainer>
          <ImageStyle source={require('assets/images/dog.jpeg')} />
          <NameText>{currentPost?.userInfo.name}</NameText>
          <Text>{currentPost?.postContent}</Text>
        </PostInfoContainer>
        {currentPost?.reply?.map((item, index) => (
          <ReplyContainer key={index}>
            <ReplyContentContainer>
              <UserInfo>
                <ImageStyle source={require('assets/images/dog.jpeg')} />
                <NameText>{item.replyor.name}</NameText>
              </UserInfo>
              <Text>{item.content}</Text>
            </ReplyContentContainer>
            <HeartImage
              source={require('assets/images/heart.png')}
              style={{tintColor: 'gray'}}
            />
          </ReplyContainer>
        ))}
      </View>
      <TextInputContainer>
        <Text style={{fontSize: 25}}>❤️🤩✌🏻🫠😩🫣🫡☺️😘😊😭</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            placeholder={'_2da1_(으)로 댓글 달기..'}
            onChangeText={() => {
              console.log('kklkj');
            }}
            style={{...styles.textIput, flex: 8}}
          />
          <Text
            style={{
              color: '#144da8',
              flex: 1,
            }}>
            게시
          </Text>
        </View>
      </TextInputContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  textIput: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 15,
    padding: 10,
    margin: 10,
  },
});

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const ImageStyle = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0 10px 0 0;
`;

const PostInfoContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
  padding: 15px 10px 15px 10px;
`;

const ReplyContainer = styled.View`
  flex-direction: row;
  padding: 10px 10px 10px 10px;
  justify-content: space-between;
`;

const UserInfo = styled.View`
  flex-direction: row;
`;

const NameText = styled.Text`
  font-weight: bold;
  margin: 0 5px 0 0;
`;

const HeartImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const ReplyContentContainer = styled.View`
  flex-direction: row;
`;

const TextInputContainer = styled.View`
  border-top-width: 1px;
  border-color: #d9d9d9;
  padding: 0 0 30px 0;
`;

export default PostDetailScreen;
