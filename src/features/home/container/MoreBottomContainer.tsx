import {imagePath} from 'image';
import {Text} from 'react-native';
import styled from 'styled-components/native';

interface SmallBtnTypes {
  id: number;
  image: string;
  text: string;
}
console.log('git test');

const SmallBtnItems: Array<SmallBtnTypes> = [
  {id: 1, image: imagePath.upload, text: '공유'},
  {id: 2, image: imagePath.link, text: '링크'},
  {id: 3, image: imagePath.bookmark, text: '저장'},
  {id: 4, image: imagePath.qrcode, text: 'QR 코드'},
];

const MoreBottomContainer = () => {
  return (
    <Container>
      <SmallBtnContainer>
        {SmallBtnItems.map((item: SmallBtnTypes) => (
          <SmallBtn key={item.id}>
            <Icon source={item.image} />
            <SmallBtnText>{item.text}</SmallBtnText>
          </SmallBtn>
        ))}
      </SmallBtnContainer>
      <BtnContainer>
        <UnderlineBtn>
          <MarginIcon source={require('assets/images/star.png')} />
          <Text>즐겨찾기에 추가</Text>
        </UnderlineBtn>
        <Btn>
          <MarginIcon source={require('assets/images/remove-user.png')} />
          <Text>팔로우 취소</Text>
        </Btn>
      </BtnContainer>
      <BtnContainer>
        <UnderlineBtn>
          <MarginIcon source={require('assets/images/info.png')} />
          <Text>이 게시물이 표시되는 이유</Text>
        </UnderlineBtn>
        <UnderlineBtn>
          <MarginIcon source={require('assets/images/hide.png')} />
          <Text>숨기기</Text>
        </UnderlineBtn>
        <Btn>
          <MarginIcon
            source={require('assets/images/info-2.png')}
            style={{tintColor: 'red'}}
          />
          <Text style={{color: 'red'}}>신고</Text>
        </Btn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.View``;

const SmallBtnContainer = styled.View`
  flex-direction: row;
`;

const BtnContainer = styled.View`
  margin: 10px 10px 10px 10px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const SmallBtn = styled.TouchableOpacity`
  background-color: #d9d9d9;
  padding: 15px 10px 15px 10px;
  margin: 0 10px 0 10px;
  width: 70px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

const SmallBtnText = styled.Text`
  font-size: 12px;
  text-align: center;
`;

const Btn = styled.TouchableOpacity`
  padding: 15px 15px 15px 15px;
  flex-direction: row;
  align-items: center;
`;

const UnderlineBtn = styled(Btn)`
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 0 0 5px 0;
`;

const MarginIcon = styled(Icon)`
  margin-right: 10px;
`;

export default MoreBottomContainer;
