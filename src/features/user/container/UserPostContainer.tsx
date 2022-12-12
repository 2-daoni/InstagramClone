import styled, {css} from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import UserPost from '../component/UserPost';

const TabItem = [
  {id: 1, image: require('assets/images/feed.png')},
  {id: 2, image: require('assets/images/video.png')},
  {id: 3, image: require('assets/images/tag.png')},
];

const UserPostContainer = () => {
  const [tabId, setTabId] = useState<number>(1);

  return (
    <Container>
      <TabContainer>
        {TabItem.map(item => (
          <Tab
            isTab={item.id === tabId}
            key={item.id}
            onPress={() => {
              setTabId(item.id);
            }}>
            <Icon
              isTab={item.id === tabId}
              source={item.image}
              style={item.id === 3 && styles.bigImg}
            />
          </Tab>
        ))}
      </TabContainer>
      {tabId === 1 && <UserPost type="image" />}
      {tabId === 2 && <UserPost type="video" />}
      {tabId === 3 && <UserPost type="image" />}
    </Container>
  );
};

const styles = StyleSheet.create({
  bigImg: {
    width: 25,
    height: 25,
  },
});

const Container = styled.View``;

const TabContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const Tab = styled.TouchableOpacity<{isTab?: boolean}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isTab &&
    css`
      border-bottom-width: 1px;
      border-color: black;
    `}
`;

const Icon = styled.Image<{isTab?: boolean}>`
  width: 20px;
  height: 20px;
  margin: 0 0 5px 0;
  tint-color: gray;
  ${props =>
    props.isTab &&
    css`
      tint-color: black;
    `}
`;

export default UserPostContainer;
