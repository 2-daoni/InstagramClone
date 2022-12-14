import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {PostTypes} from 'types/commonTypes';

const PostHeader = ({
  items,
  bottomSheetRef,
}: {
  items: PostTypes;
  bottomSheetRef: any;
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const handleShowMore = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const handlePressProfile = () => {
    navigation.navigate('UserScreen', {
      id: items.userInfo.id,
      userInfo: items.userInfo,
    });
  };

  return (
    <>
      <PostHeaderContainer>
        <ProfileContainer onPress={handlePressProfile}>
          <ProfileImage source={items.userInfo.profileImage} />
          <CustomText>{items?.userInfo?.name}</CustomText>
        </ProfileContainer>
        <TouchableOpacity
          onPress={() => {
            handleShowMore();
          }}>
          <ImageStyle source={require('assets/images/more.png')} />
        </TouchableOpacity>
      </PostHeaderContainer>
    </>
  );
};

const PostHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 10px 10px;
`;

const ProfileContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 10px 0 0;
`;
const CustomText = styled.Text<{fontColor?: string; fontWeight?: 'string'}>`
  color: ${props => props.fontColor || '#111'};
  font-weight: ${props => props.fontWeight || '400'};
  margin: 2px 0 2px 0;
`;

const ImageStyle = styled.Image`
  width: 20px;
  height: 20px;
`;

export default PostHeader;
