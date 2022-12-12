import styled from 'styled-components/native';

const HomeHeader = () => {
  return (
    <Container>
      <Title>Instagram</Title>
      <IconContainer>
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

const IconContainer = styled.View`
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

export default HomeHeader;
