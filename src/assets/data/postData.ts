import {PostTypes} from 'types/commonTypes';

export const postData: Array<PostTypes> = [
  {
    id: 1,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '3da1',
    },
    postImage: 'assets/images/dog.jpeg',
    postContent: '게시글 작성이에요 트리가 참 이쁘지요 보고싶네요',
    replyNumber: 10,
    reply: [
      {
        id: 1,
        replyor: {
          id: 1,
          profileImage: 'assets/images/dog.jpeg',
          name: 'daoni',
        },
        content: '트리이',
      },
      {
        id: 2,
        replyor: {
          id: 2,
          profileImage: 'assets/images/tree.jpg',
          name: '2da111111',
        },
        content: '댓글이야요',
      },
    ],
    likeNumber: 230,
  },
  {
    id: 2,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '3da1',
    },
    postImage: 'assets/images/dog.jpeg',
    postContent:
      '꺄아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    replyNumber: 0,
    likeNumber: 30,
  },
  {
    id: 3,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '3da1',
    },
    postContent: 'ㅏㅏ',
    postImage: 'assets/images/dog.jpeg',
    replyNumber: 4,
    likeNumber: 10,
  },
  {
    id: 4,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '3da1',
    },
    postContent: '',
    postImage: 'assets/images/dog.jpeg',
    replyNumber: 10,
    likeNumber: 230,
  },
];
