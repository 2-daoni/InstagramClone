import {useContext} from 'react';
import {Context} from 'store/context/context';
import styled from 'styled-components/native';

const PostBottom = ({item, handleIsLike, route}: any) => {
  const context = useContext(Context);
  const isLike = context.ids.includes(item.id);
  const isSave = context.savePostIds.includes(item.id);

  const handlePressLike = () => {
    handleIsLike(!isLike);
    if (isLike) {
      context.removeFavorite(item.id);
    } else {
      context.addFavorite(item.id);
    }
  };

  const handleSavePost = () => {
    if (isSave) {
      context.removeSavePost(item.id);
    } else {
      context.addSavePost(item.id);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Touchable onPress={handlePressLike}>
          <IconStyle
            source={
              isLike
                ? require('assets/images/heart-2.png')
                : require('assets/images/heart.png')
            }
          />
        </Touchable>
        <Touchable>
          <IconStyle
            source={require('assets/images/chat.png')}
            width="25px"
            height="20px"
          />
        </Touchable>
        <Touchable>
          <IconStyle source={require('assets/images/send.png')} />
        </Touchable>
      </LeftContainer>
      <RightContainer>
        <Touchable onPress={handleSavePost}>
          <IconStyle
            source={
              isSave
                ? require('assets/images/bookmark-2.png')
                : require('assets/images/bookmark.png')
            }
          />
        </Touchable>
      </RightContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px 5px 5px;
`;

const LeftContainer = styled.View`
  flex-direction: row;
`;

const RightContainer = styled.View`
  flex-direction: row;
`;

const Touchable = styled.TouchableOpacity`
  padding: 5px 5px 5px 5px;
  align-items: center;
`;

const IconStyle = styled.Image<{width?: string; height?: string}>`
  align-items: center;
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  padding: 5px 5px 5px 5px;
`;

export default PostBottom;
