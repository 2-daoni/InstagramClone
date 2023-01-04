import styled from 'styled-components/native';
import SearchBar from '../container/SearchBar';
import SearchBar2 from '../container/SearchBar2';
import SearchResult from '../container/SearchResult';

const SearchScreen = () => {
  return (
    <Container>
      {/* <SearchBar /> */}
      <SearchBar2 />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default SearchScreen;
