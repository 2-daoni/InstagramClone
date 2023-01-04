import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BottomTabContext} from 'store/context/bottomTabContext';
import styled, {css} from 'styled-components/native';
import {UserTypes} from 'types/commonTypes';

const profileImg = 'assets.images.dog.jpeg';

const UserListBottomSheet = () => {
  const [userList, setUserList] = useState<Array<UserTypes>>([]);
  const [currentUser, setCurrentUser] = useState<UserTypes>();

  useEffect(() => {
    setCurrentUser({
      id: 1,
      name: '2da1',
      profileImage: 'assets/images/dog.jpeg',
    });
    setUserList([
      {id: 1, name: '2da1', profileImage: profileImg},
      {id: 2, name: '3da1', profileImage: profileImg},
      {id: 3, name: '4da1', profileImage: profileImg},
    ]);
  }, []);

  return (
    <Container>
      {userList.map((item: UserTypes) => (
        <UserList key={item.id} currentUser={item.id === currentUser?.id}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UserImage source={require('assets/images/dog.jpeg')} />
            <UserName style={item.id === currentUser?.id && styles.blueText}>
              {item.name}
            </UserName>
          </View>
          {item.id === currentUser?.id && (
            <CheckImg source={require('assets/images/check.png')} />
          )}
        </UserList>
      ))}
      <AddUser>
        <PlusImageContainer>
          <PlusImage source={require('assets/images/plus-2.png')} />
        </PlusImageContainer>
        <Text>계정추가</Text>
      </AddUser>
    </Container>
  );
};

const styles = StyleSheet.create({
  blueText: {
    color: '#436caf',
    fontWeight: '600',
  },
});

const Container = styled.View`
  width: 100%;
  background-color: #efefef;
  height: 100%;
`;

const UserList = styled.View<{currentUser?: boolean}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d8d8d8;
  padding: 10px 10px 10px 10px;
  background-color: #efefef;
  ${props =>
    props.currentUser &&
    css`
      background-color: white;
    `};
`;

const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const PlusImageContainer = styled.View`
  border-width: 1px;
  border-color: #d8d8d8;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

const PlusImage = styled.Image`
  width: 30px;
  height: 30px;
  padding: 10px;
`;

const UserName = styled.Text`
  font-weight: 600;
`;

const CheckImg = styled.Image`
  width: 20px;
  height: 20px;
`;

const AddUser = styled.View`
  padding: 10px 10px 10px 10px;
  min-height: 50px;
  background-color: #efefef;
  flex-direction: row;
  align-items: center;
`;

export default UserListBottomSheet;
