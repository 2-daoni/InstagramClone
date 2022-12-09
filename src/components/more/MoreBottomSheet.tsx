import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const MoreBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  return (
    <BottomSheet index={1} snapPoints={snapPoints} ref={bottomSheetRef}>
      <Container>
        <Text>공유</Text>
      </Container>
    </BottomSheet>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default MoreBottomSheet;
