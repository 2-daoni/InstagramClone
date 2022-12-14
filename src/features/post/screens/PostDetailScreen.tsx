import {postData} from 'assets/data/postData';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity} from 'react-native';
import {PostTypes, ReplyTypes} from 'types/commonTypes';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import MoreBottomContainer from 'features/home/container/MoreBottomContainer';
import PostHeader from '../component/PostHeader';
import styled from 'styled-components/native';
import PostBottom from 'features/home/component/PostBottom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const PostDetailScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const windowWidth = Dimensions.get('window').width;
  const [likeNum, setLikeNum] = useState<number>(0);

  const keyExtractor = useCallback(
    (item: any, index: number) => index.toString(),
    [],
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['15%', '75%'], []);

  const handleIsLike = (like: boolean) => {
    if (like) {
      setLikeNum(1);
    } else {
      setLikeNum(0);
    }
  };

  const handleMoreReply = (item: PostTypes) => {
    navigation.navigate('PostReplyDetailScreen', {id: item.id});
  };

  if (route?.params?.type === 'video') {
    return <Text style={{textAlign: 'center'}}>비디오는 작업중입니닷.</Text>;
  }

  const renderItem = ({item}: {item: PostTypes}) => {
    return (
      <ItemContainer>
        <PostHeader items={item} bottomSheetRef={bottomSheetRef} />
        <PostImage source={item.postImage} windowWidth={windowWidth} />
        <PostBottom item={item} handleIsLike={handleIsLike} />
        <ContentContainer>
          <CustomText>좋아요 {item.likeNumber + likeNum}개</CustomText>
          <CustomText numberOfLines={1}>
            <BoldText>{item.userInfo.name}</BoldText> {item.postContent}
          </CustomText>
          {typeof item.reply !== 'undefined' && (
            <>
              <TouchableOpacity
                onPress={() => {
                  handleMoreReply(item);
                }}>
                <CustomText fontColor="gray">
                  댓글 {item.reply.length}개 모두 보기
                </CustomText>
              </TouchableOpacity>
              {item.reply.map((item: ReplyTypes) => (
                <CustomText key={item.id}>
                  <BoldText>{item.replyor.name}</BoldText>
                  {item.content}
                </CustomText>
              ))}
            </>
          )}
          <CustomText fontColor="gray">{item.date}</CustomText>
        </ContentContainer>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
                flex: 1,
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
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  padding: 0 10px 0 10px;
`;

const ItemContainer = styled.View`
  margin-bottom: 30px;
`;

const PostImage = styled.Image<{windowWidth: number}>`
  width: 100%;
  height: ${props => props.windowWidth}px;
`;

const CustomText = styled.Text<{fontColor?: string; fontWeight?: 'string'}>`
  color: ${props => props.fontColor || '#111'};
  font-weight: ${props => props.fontWeight || '400'};
  margin: 2px 0 2px 0;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

export default PostDetailScreen;
