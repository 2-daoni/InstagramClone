import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {postData} from 'assets/data/postData';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  type: 'image' | 'video';
}

const UserPost = ({type}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const windowWidth = Dimensions.get('window').width / 3 - 2;

  const handlePressPost = () => {
    navigation.navigate('PostDetailScreen', {type: type});
  };

  return (
    <Container>
      <ItemContainer>
        {postData.map((item: any) => (
          <ImageBtn key={item.id} width={windowWidth} onPress={handlePressPost}>
            <ImageItem
              type={type}
              width={windowWidth}
              source={item.postImage}
            />
          </ImageBtn>
        ))}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View``;

const ItemContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageBtn = styled.TouchableOpacity<{width: number}>`
  width: ${props => props.width};
  margin: 0 1px 0 0;
`;

const ImageItem = styled.Image<{type: 'image' | 'video'; width: number}>`
  ${props =>
    props.type === 'image'
      ? css`
          width: 100%;
          height: 130px;
        `
      : css`
          max-width: ${props => props.width}px;
          height: 200px;
        `};
`;

export default UserPost;
