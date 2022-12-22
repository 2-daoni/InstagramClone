import {useRef, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (value: string) => {
    console.log(value);
  };

  const handlePressSearchBar = () => {
    setIsSearch(true);
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const getTextInput = () => {
    // if (isSearch) {
    //   if (inputRef.current !== null) {
    //     inputRef.current.focus();
    //   }
    return (
      <InputStyle
        isSearch={isSearch}
        ref={inputRef}
        autoCapitalize="none"
        placeholder="검색"
        placeholderTextColor="#d9d9d9"
        onChangeText={(e: any) => {
          handleChangeText(e);
        }}
      />
    );
    // } else {
    //   return (
    //     <TextContainerStyle>
    //       <TextStyle>검색</TextStyle>
    //     </TextContainerStyle>
    //   );
    // }
  };

  return (
    <Container onPress={handlePressSearchBar}>
      <InputContainerStyle isSearch={isSearch}>
        <ImageStyle source={require('assets/images/search.png')} />
        {getTextInput()}
      </InputContainerStyle>
      {isSearch && (
        <CancelStyle
          onPress={() => {
            setIsSearch(false);
            Keyboard.dismiss();
          }}>
          <Text>취소</Text>
        </CancelStyle>
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 60px auto 0;
`;

const InputContainerStyle = styled.View<{isSearch: boolean}>`
  background-color: #b4b4b4;
  flex-direction: row;
  align-items: center;
  border-radius: 7px;
  width: ${props => (props.isSearch ? '90%' : '100%')};
`;

const InputStyle = styled.TextInput<{isSearch: boolean}>`
  height: 30px;
  width: 80%;
  opacity: ${props => (props.isSearch ? 1 : 0)};
`;

const ImageStyle = styled.Image`
  width: 15px;
  height: 15px;
  tint-color: #d9d9d9;
  margin: 0 5px 0 10px;
`;

const TextContainerStyle = styled.View`
  height: 30px;
  justify-content: center;
`;

const TextStyle = styled.Text`
  color: #d9d9d9;
`;

const CancelStyle = styled.TouchableOpacity`
  align-items: center;
  width: 40px;
`;

export default SearchBar;
