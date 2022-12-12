import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {UserTypes} from 'types/commonTypes';

const followData: Array<UserTypes> = [
  {
    id: 1,
    name: 'nwnw',
    profileImage: require('assets/images/tree.jpg'),
  },
  {id: 2, name: 'dwdw', profileImage: require('assets/images/dog.jpeg')},
];

const renderItem = () => {
  return <Text></Text>;
};

const UserFollowListScreen = () => {
  return (
    <Container>
      <FlatList data={followData} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.View``;

export default UserFollowListScreen;
