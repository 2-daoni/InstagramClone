import {postData} from 'assets/data/postData';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {PostTypes} from 'types/commonTypes';
import PostBottom from '../../home/component/PostBottom';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useMemo, useRef} from 'react';
import MoreBottomContainer from '../../home/container/MoreBottomContainer';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const PostContainer = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  const handleShowMore = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const renderItem = ({item}: {item: PostTypes}) => {
    const handlePostDetail = () => {
      navigation.navigate('PostDetailScreen', {id: item.id});
    };

    return (
      <>
        <Container>
          <PostHeader>
            <ProfileContainer>
              <ProfileImage source={require('assets/images/dog.jpeg')} />
              <CustomText>{item.userInfo.name}</CustomText>
            </ProfileContainer>
            <TouchableOpacity
              onPress={() => {
                handleShowMore();
              }}>
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
            <PostItemContainer>
              <CustomText fontColor="gray" onPress={handlePostDetail}>
                댓글 {item.replyNumber}개 모두 보기
              </CustomText>
            </PostItemContainer>
          </PostContent>
        </Container>
      </>
    );
  };
  return (
    <ListContainer>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        onClose={() => bottomSheetRef.current?.close()}
        backdropComponent={backdropProps => {
          return (
            <BottomSheetBackdrop
              {...backdropProps}
              style={{
                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
              }}
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              appearsOnIndex={1}
              disappearsOnIndex={0}
            />
          );
        }}>
        <BottomSheetView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <MoreBottomContainer />
        </BottomSheetView>
      </BottomSheet>
    </ListContainer>
  );
};

const Container = styled.View`
  margin: 5px 0 10px 0;
`;

const PostItemContainer = styled.TouchableOpacity`
  margin: 5px 0 10px 0;
`;

const ListContainer = styled.View`
  margin: 0 0 100px 0;
  margin-bottom: 100px;
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
