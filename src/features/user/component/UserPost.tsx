import styled, {css} from 'styled-components/native';

interface Props {
  type: 'image' | 'video';
}

const UserPost = ({type}: Props) => {
  return (
    <Container>
      <ItemContainer>
        <ImageItem type={type} source={require('assets/images/tree.jpg')} />
        <ImageItem type={type} source={require('assets/images/tree.jpg')} />
        <ImageItem type={type} source={require('assets/images/tree.jpg')} />
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View``;

const ItemContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;

const ImageItem = styled.Image<{type: 'image' | 'video'}>`
  margin: 0 1px 0 0;
  ${props =>
    props.type === 'image'
      ? css`
          flex: 1;
          height: 130px;
        `
      : css`
          flex: 1;
          height: 200px;
        `}
`;

export default UserPost;
