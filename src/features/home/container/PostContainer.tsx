import {postData} from 'assets/data/postData';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {PostTypes} from 'types/commonTypes';
import PostBottom from '../component/PostBottom';
import MoreBottomSheet from 'components/more/MoreBottomSheet';

const renderItem = ({item}: {item: PostTypes}) => {
  const handleShowMore = () => {
    return <MoreBottomSheet />;
  };

  return (
    <Container>
      <PostHeader>
        <ProfileContainer>
          <ProfileImage source={require('assets/images/dog.jpeg')} />
          <CustomText>{item.userInfo.name}</CustomText>
        </ProfileContainer>
        <TouchableOpacity onPress={handleShowMore}>
          <ImageStyle source={require('assets/images/more.png')} />
        </TouchableOpacity>
      </PostHeader>
      <PostImage source={require('assets/images/tree.jpg')} />
      <PostBottom item={item} />
      <PostContent>
        <CustomText>좋아요 {item.likeNumber}개</CustomText>
        <CustomText numberOfLines={1}>
          <BoldText>{item.userInfo.name}</BoldText> {item.postContent}
        </CustomText>
        <CustomText fontColor="gray">
          댓글 {item.replyNumber}개 모두 보기
        </CustomText>
      </PostContent>
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

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 10px 10px;
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

const PostContent = styled.View`
  margin: 0 10px 0 10px;
`;

const ImageStyle = styled.Image`
  width: 20px;
  height: 20px;
`;

export default PostContainer;
