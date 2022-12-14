import {Image, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import UserInfoContainer from '../container/UserInfoContainer';
import UserListBottomSheet from '../container/UserListBottomSheet';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useContext, useMemo, useRef} from 'react';
import {BottomTabContext} from 'store/context/bottomTabContext';
import UserStoryListContainer from '../container/UserStoryListContainer';
import UserPostContainer from '../container/UserPostContainer';
import UserMenuBottomSheet from '../container/UserMenuBottomSheet';

const MyScreen = () => {
  const bottomTabContext = useContext(BottomTabContext);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const menuBottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '45%'], []);
  const menuSnapPoints = useMemo(() => ['25%', '70%'], []);

  return (
    <Container>
      <Header>
        <User
          onPress={() => {
            bottomSheetRef.current?.snapToIndex(1);
            bottomTabContext.setIsBottomShow(false);
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>_2da1_</Text>
          <Image
            source={require('assets/images/down-arrow.png')}
            style={{width: 20, height: 20, marginLeft: 10}}
          />
        </User>
        <BtnContainer>
          <Btn>
            <Icon source={require('assets/images/more-2.png')} />
          </Btn>
          <Btn
            onPress={() => {
              menuBottomSheetRef.current?.snapToIndex(1);
              bottomTabContext.setIsBottomShow(false);
            }}>
            <Icon source={require('assets/images/menu.png')} />
          </Btn>
        </BtnContainer>
      </Header>
      <ScrollView>
        <UserInfoContainer />
        <UserStoryListContainer />
        <UserPostContainer />
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        onClose={() => {
          bottomSheetRef.current?.close();
          bottomTabContext.setIsBottomShow(true);
        }}
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
                top: 0,
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
      <BottomSheet
        ref={menuBottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={menuSnapPoints}
        onClose={() => {
          menuBottomSheetRef.current?.close();
          bottomTabContext.setIsBottomShow(true);
        }}
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
                top: 0,
              }}
              onPress={() => {
                menuBottomSheetRef.current?.close();
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
          <UserMenuBottomSheet />
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 80px 0 0 0;
`;

const Header = styled.View`
  flex-direction: row;
  min-height: 50px;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

const User = styled.TouchableOpacity`
  margin-left: 10px;
  flex-direction: row;
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
