import styled from 'styled-components/native';
import SearchBar from '../container/SearchBar';

const SearchScreen = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default SearchScreen;
