import {imagePath} from 'image';
import {StoryHighlightTypes, StoryTypes} from 'types/commonTypes';

export const storyData: Array<StoryTypes> = [
  {
    id: 1,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '2da1',
    },
    storyImage: 'assets/images/tree.jpg',
  },
  {
    id: 2,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '3da1',
    },
    storyImage: 'assets/images/tree.jpg',
  },
  {
    id: 3,
    userInfo: {
      id: 1,
      profileImage: 'assets/images/dog.jpeg',
      name: '4da1',
    },
    storyImage: 'assets/images/tree.jpg',
  },
];

const StoryHighlightData: StoryHighlightTypes[] = [
  {
    id: 1,
    name: '여행',
    storyImages: [
      imagePath.dummy1,
      imagePath.dummy2,
      imagePath.dummy3,
      imagePath.dummy4,
    ],
  },
  {
    id: 2,
    name: '여행',
    storyImages: [
      imagePath.bookmark,
      imagePath.link,
      imagePath.qrcode,
      imagePath.upload,
    ],
  },
];
