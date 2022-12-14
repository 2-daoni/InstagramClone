import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {userData} from 'assets/data/userData';
import {useLayoutEffect} from 'react';
import UserInfoContainer from '../container/UserInfoContainer';
import UserPostContainer from '../container/UserPostContainer';

const UserScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute<RouteProp<any>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.userInfo.name,
    });
  }, [route.params]);

  return (
    <>
      <UserInfoContainer
        userInfo={userData.find(item => item.id === route.params?.id)}
      />
      <UserPostContainer />
    </>
  );
};

export default UserScreen;
