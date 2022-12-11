import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const UserInfoContainer = () => {
  return (
    <View>
      <Container>
        <UserProfileImage>
          <ProfileImage source={require('assets/images/dog.jpeg')} />
          <PlusImage source={require('assets/images/plus.png')} />
        </UserProfileImage>
        <UserFollowerInfoContianer>
          <UserFollowerInfo>
            <CustomText fontWeight="bold">18</CustomText>
            <CustomText>게시물</CustomText>
          </UserFollowerInfo>
          <UserFollowerInfo>
            <CustomText fontWeight="bold">162</CustomText>
            <CustomText>팔로워</CustomText>
          </UserFollowerInfo>
          <UserFollowerInfo>
            <CustomText fontWeight="bold">124</CustomText>
            <CustomText>팔로잉</CustomText>
          </UserFollowerInfo>
        </UserFollowerInfoContianer>
      </Container>
      <Container>
        <EditBtn>
          <Text>프로필 편집</Text>
        </EditBtn>
        <AddUserBtn>
          <Image
            source={require('assets/images/remove-user.png')}
            style={{width: 20, height: 20}}
          />
        </AddUserBtn>
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
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
  top: 60;
  border-radius: 15px;
  border-width: 2px;
  border-color: #fff;
`;

const UserFollowerInfoContianer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

const UserFollowerInfo = styled.View`
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
`;

const AddUserBtn = styled.TouchableOpacity`
  background: #d9d9d9;
  border-radius: 5px;
  align-items: center;
  padding: 5px 5px 5px 5px;
  margin: 0 5px 0 5px;
`;

export default UserInfoContainer;
