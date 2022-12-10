import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {useEffect, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const MoreBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleClose = () => {
    //
  };
  const renderBottomSheetFooter = () => {
    return <Text>dkdkdkdkddkljaljlj</Text>;
  };
  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose
      onClose={handleClose}
      footerComponent={renderBottomSheetFooter}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          }}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
          opacity={0.25}
        />
      )}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>dkdkdkdk</Text>
        </View>
      </View>
    </BottomSheet>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default MoreBottomSheet;
