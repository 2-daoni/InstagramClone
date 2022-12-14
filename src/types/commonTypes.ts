import {ImageSourcePropType} from 'react-native';

export type UserTypes = {
  id: number;
  name: string;
  profileImage: string;
  postNum: number;
  followerNum: number;
  followingNum: number;
};

export type StoryTypes = {
  id: number;
  userInfo: UserTypes;
  storyImage: string;
};

export type ReplyTypes = {
  id: number;
  replyor: UserTypes;
  content: string;
};

export type PostTypes = {
  id: number;
  userInfo: UserTypes;
  postImage: ImageSourcePropType;
  replyNumber: number;
  likeNumber: number;
  postContent: string;
  reply?: Array<ReplyTypes>;
  date: string;
};
