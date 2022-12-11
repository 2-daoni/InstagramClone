import {Text} from 'react-native';
import styled from 'styled-components/native';
import UserInfoContainer from '../container/UserInfoContainer';
import UserListBottomSheet from '../container/UserListBottomSheet';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useMemo, useRef} from 'react';

const MyScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '55%'], []);

  return (
    <Container>
      <Header>
        <User
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(1);
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>_2da1_</Text>
        </User>
        <BtnContainer>
          <Btn>
            <Icon source={require('assets/images/more-2.png')} />
          </Btn>
          <Btn>
            <Icon source={require('assets/images/more-2.png')} />
          </Btn>
        </BtnContainer>
      </Header>
      <UserInfoContainer></UserInfoContainer>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        onClose={() => bottomSheetRef.current?.close()}
        backdropComponent={backdropProps => {
          return (
            <BottomSheetBackdrop
              {...backdropProps}
              style={{
                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
              }}
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              appearsOnIndex={1}
              disappearsOnIndex={0}
            />
          );
        }}>
        <BottomSheetView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <UserListBottomSheet />
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 80px 10px 50px 10px;
`;

const Header = styled.View`
  flex-direction: row;
  min-height: 50px;
  justify-content: space-between;
`;

const User = styled.TouchableOpacity`
  margin-left: 10px;
`;

const BtnContainer = styled.View`
  flex-direction: row;
`;

const Btn = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 0 5px 0 10px;
`;

export default MyScreen;
