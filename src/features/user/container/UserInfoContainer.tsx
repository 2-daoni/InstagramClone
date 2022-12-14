import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styled, {css} from 'styled-components/native';
import {UserTypes} from 'types/commonTypes';

interface Props {
  userInfo: UserTypes | undefined;
}

const UserInfoContainer = ({userInfo}: Props) => {
  const navigation = useNavigation<any>();
  const [follow, setFollow] = useState<boolean>(false);
  const [isMe, setIsMe] = useState<boolean>(false);

  const handlePressFollow = () => {
    setFollow(!follow);
  };

  useEffect(() => {
    if (userInfo?.id === 1) {
      setIsMe(true);
    } else {
      setIsMe(false);
    }
  }, [userInfo]);

  return (
    <View>
      <Container>
        <UserProfileImage>
          <ProfileImage
            source={
              typeof userInfo?.profileImage !== 'undefined' &&
              userInfo?.profileImage
            }
          />
          {isMe ? (
            <PlusImage source={require('assets/images/plus.png')} />
          ) : (
            <></>
          )}
        </UserProfileImage>
        <UserFollowerInfoContianer>
          <UserFollowerInfo>
            <CustomText fontWeight="bold">{userInfo?.postNum}</CustomText>
            <CustomText>게시물</CustomText>
          </UserFollowerInfo>
          <UserFollowerInfo
            onPress={() => {
              navigation.navigate('UserFollowListScreen');
            }}>
            <CustomText fontWeight="bold">
              {typeof userInfo?.followerNum !== 'undefined' && follow ? (
                <>{userInfo?.followerNum + 1}</>
              ) : (
                <>{userInfo?.followerNum}</>
              )}
            </CustomText>
            <CustomText>팔로워</CustomText>
          </UserFollowerInfo>
          <UserFollowerInfo>
            <CustomText fontWeight="bold">{userInfo?.followingNum}</CustomText>
            <CustomText>팔로잉</CustomText>
          </UserFollowerInfo>
        </UserFollowerInfoContianer>
      </Container>
      <Container>
        {isMe ? (
          <>
            <EditBtn>
              <Text>프로필 편집</Text>
            </EditBtn>
            <AddUserBtn>
              <Image
                source={require('assets/images/remove-user.png')}
                style={{width: 20, height: 20}}
              />
            </AddUserBtn>
          </>
        ) : (
          <>
            <FollowBtn onPress={handlePressFollow} follow={follow}>
              <FollowText follow={follow}>팔로우</FollowText>
            </FollowBtn>
            <EditBtn>
              <Text>메시지</Text>
            </EditBtn>
          </>
        )}
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 0 10px 0 10px;
`;

const UserProfileImage = styled.TouchableOpacity`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const PlusImage = styled.Image`
  width: 30px;
  height: 30px;
  position: relative;
  right: 20px;
  top: 60px;
  border-radius: 15px;
  border-width: 2px;
  border-color: #fff;
`;

const UserFollowerInfoContianer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

const UserFollowerInfo = styled.TouchableOpacity`
  align-items: center;
`;

const CustomText = styled.Text<{fontWeight?: string; fontSize?: string}>`
  font-weight: ${props => props.fontWeight || '500'};
  font-size: ${props => props.fontSize || '16px'};
`;

const EditBtn = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #d9d9d9;
  flex: 1;
  align-items: center;
  padding: 7px 0 7px 0;
  margin-right: 5px;
`;

const AddUserBtn = styled.TouchableOpacity`
  background: #d9d9d9;
  border-radius: 5px;
  align-items: center;
  padding: 5px 5px 5px 5px;
  margin: 0 5px 0 5px;
`;

const FollowBtn = styled.TouchableOpacity<{follow: boolean}>`
  border-radius: 5px;
  flex: 1;
  align-items: center;
  padding: 7px 0 7px 0;
  margin-right: 5px;
  ${props =>
    props.follow
      ? css`
          background-color: #d9d9d9;
        `
      : css`
          background-color: #2d68c7;
        `}
`;

const FollowText = styled.Text<{follow: boolean}>`
  color: ${props => (props.follow ? '#76c057' : 'white')};
`;

export default UserInfoContainer;
