import {launchImageLibrary} from 'react-native-image-picker';
import styled from 'styled-components/native';

const HomeHeader = () => {
  const handlePressAdd = async () => {
    await launchImageLibrary({mediaType: 'mixed'});
  };

  return (
    <Container>
      <Title>Instagram</Title>
      <IconContainer onPress={handlePressAdd}>
        <Icon source={require('assets/images/more-2.png')} />
      </IconContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

export default HomeHeader;
