import React from 'react';
import Timeline from 'react-native-beautiful-timeline';
import styled from 'styled-components/native';

const data = [
  {
    date: 1574342522000,
    data: [
      {
        title: '오모스 킥오프 미팅',
        subtitle: '1시 30분',
        date: 1574342522000,
      },
      {
        title: 'javascript 스터디',
        subtitle: '2시반',
        date: 1574342501000,
      },
    ],
  },
  {
    date: 1574248261000,
    data: [
      {
        title: '클론코딩',
        subtitle: '인스타 클론코딩',
        date: 1574248261000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: '타임라인',
        subtitle: '적용',
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: '타임라인',
        subtitle: '적용',
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: '타임라인',
        subtitle: '적용',
        date: 1574125621000,
      },
    ],
  },
];

const ShopScreen = () => {
  return (
    <Container>
      <Timeline
        data={data}
        style={{
          backgroundColor: 'white',
          paddingTop: 20,
        }}
        dashColor="black"
      />
    </Container>
  );
};

export default ShopScreen;

const Container = styled.View`
  background-color: white;
`;
