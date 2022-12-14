import {imagePath} from 'image';
import {PostTypes} from 'types/commonTypes';

export const postData: Array<PostTypes> = [
  {
    id: 1,
    userInfo: {
      id: 1,
      profileImage: imagePath.dummy1,
      name: '2da1',
      postNum: 4,
      followerNum: 168,
      followingNum: 124,
    },
    postImage: imagePath.dummy1,
    postContent: '게시글 작성이에요 트리가 참 이쁘지요 호호',
    replyNumber: 10,
    reply: [
      {
        id: 1,
        replyor: {
          id: 1,
          profileImage: 'assets/images/dog.jpeg',
          name: 'daoni',
          postNum: 4,
          followerNum: 168,
          followingNum: 124,
        },
        content: '트리이',
      },
      {
        id: 2,
        replyor: {
          id: 2,
          profileImage: 'assets/images/tree.jpg',
          name: '2da111111',
          postNum: 4,
          followerNum: 168,
          followingNum: 124,
        },
        content: '댓글이야요',
      },
    ],
    likeNumber: 230,
    date: '12월 14일',
  },
  {
    id: 2,
    userInfo: {
      id: 2,
      profileImage: imagePath.dummy2,
      name: '3da1',
      postNum: 3,
      followerNum: 12,
      followingNum: 190,
    },
    postImage: imagePath.dummy2,
    postContent:
      '꺄아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    replyNumber: 1,
    reply: [
      {
        id: 1,
        replyor: {
          id: 1,
          profileImage: 'assets/images/dog.jpeg',
          name: 'daoni',
          postNum: 3,
          followerNum: 12,
          followingNum: 190,
        },
        content: '댓그르르르르르르를',
      },
    ],
    likeNumber: 30,
    date: '11월 20일',
  },
  {
    id: 3,
    userInfo: {
      id: 3,
      profileImage: imagePath.dummy3,
      name: 'daoni',
      postNum: 98,
      followerNum: 450,
      followingNum: 389,
    },
    postContent: 'ㅏㅏ',
    postImage: imagePath.dummy3,
    replyNumber: 4,
    likeNumber: 10,
    date: '10월 9일',
  },
  {
    id: 4,
    userInfo: {
      id: 4,
      profileImage: imagePath.dummy4,
      name: '22ddaa11',
      postNum: 1,
      followerNum: 18,
      followingNum: 22,
    },
    postContent: 'dhdkdkdh',
    postImage: imagePath.dummy4,
    replyNumber: 10,
    likeNumber: 230,
    date: '9월 24일',
  },
];
