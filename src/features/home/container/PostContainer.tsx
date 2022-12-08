import {FlatList, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {PostTypes} from '../../../../types/commonTypes';
import {postData} from '../../../assets/data/postData';

const renderItem = ({item}: {item: PostTypes}) => {
  return (
    <Container>
      <PostHeader>
        <ProfileImage source={require('../../../assets/images/dog.jpeg')} />
        <CustomText>{item.userInfo.name}</CustomText>
      </PostHeader>
      <PostImage source={require('../../../assets/images/tree.jpg')} />
      <CustomText>좋아요 {item.likeNumber}개</CustomText>
      <CustomText numberOfLines={1}>
        <BoldText>{item.userInfo.name}</BoldText> {item.postContent}
      </CustomText>
      <CustomText fontColor="gray">
        댓글 {item.replyNumber}개 모두 보기
      </CustomText>
    </Container>
  );
};

const PostContainer = () => {
  return (
    <FlatList
      data={postData}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id}
    />
  );
};

const Container = styled.View`
  margin: 5px 0 10px 0;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px 0 0;
`;

const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 5px 10px 5px;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const CustomText = styled.Text<{fontColor?: string; fontWeight?: 'string'}>`
  color: ${props => props.fontColor || '#111'};
  font-weight: ${props => props.fontWeight || '400'};
  margin: 2px 0 2px 0;
`;

const PostImage = styled.Image`
  width: 400px;
  height: 400px;
`;

export default PostContainer;
