import {PostTypes} from '../../../types/commonTypes';

export const postData: Array<PostTypes> = [
  {
    id: 1,
    userInfo: {
      id: 1,
      profileImage: '../../../../assets/images/dog.jpeg',
      name: '3da1',
    },
    postImage: '../../../../assets/images/dog.jpeg',
    postContent: '게시글 작성',
    replyNumber: 10,
    likeNumber: 230,
  },
  {
    id: 2,
    userInfo: {
      id: 1,
      profileImage: '../../../../assets/images/dog.jpeg',
      name: '3da1',
    },
    postImage: '../../../../assets/images/dog.jpeg',
    postContent: '꺄',
    replyNumber: 0,
    likeNumber: 30,
  },
  {
    id: 3,
    userInfo: {
      id: 1,
      profileImage: '../../../../assets/images/dog.jpeg',
      name: '3da1',
    },
    postContent: 'ㅏㅏ',
    postImage: '../../../../assets/images/dog.jpeg',
    replyNumber: 4,
    likeNumber: 10,
  },
  {
    id: 4,
    userInfo: {
      id: 1,
      profileImage: '../../../../assets/images/dog.jpeg',
      name: '3da1',
    },
    postContent: '',
    postImage: '../../../../assets/images/dog.jpeg',
    replyNumber: 10,
    likeNumber: 230,
  },
];
