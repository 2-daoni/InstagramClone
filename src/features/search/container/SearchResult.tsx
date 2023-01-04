import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {PostTypes} from 'types/commonTypes';

interface Props {
  posts: Array<PostTypes>;
}

const SearchResult = ({posts}: Props) => {
  console.log(posts);
  return (
    <View>
      <Text>검색결과</Text>
      <Text>{posts?.map(item => item.postContent)}</Text>
    </View>
  );
};

export default SearchResult;
