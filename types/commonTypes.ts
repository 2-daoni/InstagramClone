export type UserTypes = {
  id: number;
  name: string;
  profileImage: string;
};

export type StoryTypes = {
  id: number;
  userInfo: UserTypes;
  storyImage: string;
};

export type PostTypes = {
  id: number;
  userInfo: UserTypes;
  postImage: string;
  replyNumber: number;
  likeNumber: number;
  postContent: string;
};
