import React, {useState} from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
import {postData} from 'assets/data/postData';
import {Keyboard, Text, TouchableOpacity} from 'react-native';
import SearchResult from './SearchResult';
import {PostTypes} from 'types/commonTypes';

const SearchBar = () => {
  const [posts, setPosts] = useState<Array<PostTypes>>([]);

  const handleChangeValue = _.debounce(
    (value: string) => {
      if (value !== '') {
        const contents = postData
          .map(item => item.postContent)
          .map(item => item.includes(value));
        let id = contents.indexOf(true);
        const itemsId = [];
        if (id !== -1) {
          itemsId.push(id);
          id = contents.indexOf(true, id + 1);
          console.log('id', id);
          itemsId.map((id: number) =>
            setPosts(postData.filter(item => item.id === id + 1)),
          );
        }
      } else {
        setPosts([]);
      }
    },
    300,
    {leading: true},
  );

  return (
    <Container>
      <SearchContainer>
        <InputStyle
          onChangeText={e => {
            handleChangeValue(e);
          }}
        />
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <Text>취소</Text>
        </TouchableOpacity>
      </SearchContainer>
      <SearchResult posts={posts} />
    </Container>
  );
};

export default SearchBar;

const Container = styled.View`
  padding: 30px 10px 0 10px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const InputStyle = styled.TextInput`
  width: 90%;
  background-color: #d9d9d9;
  margin: 0 auto;
  height: 25px;
  border-radius: 5px;
  padding-left: 10px;
`;
