import {useContext, useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomTabContext} from 'store/context/bottomTabContext';
import {ReplyTypes} from 'types/commonTypes';
import {postData} from 'assets/data/postData';
import {Context} from 'store/context/context';
import styled from 'styled-components/native';

const emoji = [
  {id: 1, text: '🤩'},
  {id: 2, text: '✌🏻'},
  {id: 3, text: '❤️'},
  {id: 4, text: '🫠'},
  {id: 5, text: '😩'},
  {id: 6, text: '🫣'},
  {id: 7, text: '🫡'},
  {id: 8, text: '☺️'},
  {id: 9, text: '😘'},
  {id: 10, text: '😊'},
  {id: 11, text: '😭'},
];

const PostReplyDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<any>>();
  const postInfo = route.params;
  const currentPost = postData.find(item => item.id === postInfo?.id);
  const bottomTabContext = useContext(BottomTabContext);
  const context = useContext(Context);
  const [value, setValue] = useState<string>('');

  const handlePressHeart = (item: ReplyTypes) => {
    const isLike = context.likeReplyId.includes(item.id);
    if (isLike) {
      context.removeLikeReply(item.id);
    } else {
      context.addLikeReply(item.id);
    }
  };

  const handlePressEmoji = (text: string) => {
    setValue(value.concat(text));
  };

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
    <Container
      behavior={'padding'}
      style={styles.avoid}
      keyboardVerticalOffset={70}>
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
            <HeartContainer
              onPress={() => {
                handlePressHeart(item);
              }}>
              <HeartImage
                source={
                  context.likeReplyId.includes(item.id)
                    ? require('assets/images/heart-2.png')
                    : require('assets/images/heart.png')
                }
                style={
                  context.likeReplyId.includes(item.id)
                    ? {tintColor: 'red'}
                    : {tintColor: 'gray'}
                }
              />
            </HeartContainer>
          </ReplyContainer>
        ))}
      </View>
      <TextInputContainer>
        <EmojiContainer>
          {emoji.map(item => (
            <Text
              key={item.id}
              style={{fontSize: 30}}
              onPress={() => handlePressEmoji(item.text)}>
              {item.text}
            </Text>
          ))}
        </EmojiContainer>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            value={value}
            placeholder={'_2da1_(으)로 댓글 달기..'}
            onChangeText={e => {
              setValue(value.concat(e));
            }}
            style={{...styles.textIput, flex: 8}}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: '#144da8',
                marginRight: 10,
              }}>
              게시
            </Text>
          </TouchableOpacity>
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
  avoid: {
    flex: 1,
  },
});

const Container = styled.KeyboardAvoidingView`
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
  align-items: center;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NameText = styled.Text`
  font-weight: bold;
  margin: 0 5px 0 0;
`;

const HeartContainer = styled.TouchableOpacity``;

const HeartImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const ReplyContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextInputContainer = styled.View`
  border-top-width: 1px;
  border-color: #d9d9d9;
  padding: 0 0 30px 0;
`;

const EmojiContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 0 10px;
`;

export default PostReplyDetailScreen;
