import {Text} from 'react-native';
import styled from 'styled-components/native';

const UserListBottomSheet = () => {
  return (
    <Container>
      <UserImage source={require('assets/images/dog.jpeg')} />
      <Text>_2da1_</Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;

const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export default UserListBottomSheet;
