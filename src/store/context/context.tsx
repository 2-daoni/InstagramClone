import {createContext, useState} from 'react';

export const Context = createContext({
  ids: Array<any>([]),
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
  storyIds: Array<any>([]),
  addShowStory: (id: number) => {},
  removeShowStory: (id: number) => {},
  savePostIds: Array<any>([]),
  addSavePost: (id: number) => {},
  removeSavePost: (id: number) => {},
});

const ContextProvider = ({children}: any) => {
  const [likePostId, setLikePostId] = useState<Array<any>>([]);
  const [showStoryId, setShowStoryId] = useState<Array<any>>([]);
  const [savePostId, setSavePostId] = useState<Array<any>>([]);

  const addFavorite = (id: number) => {
    setLikePostId((prev: any) => [...prev, id]);
  };

  const removeFavorite = (id: number) => {
    setLikePostId((prev: any) => prev.filter((postId: any) => postId !== id));
  };

  const addShowStory = (id: number) => {
    setShowStoryId((prev: any) => [...prev, id]);
  };

  const removeShowStory = (id: number) => {
    setShowStoryId((prev: any) =>
      prev.filter((storyId: any) => storyId !== id),
    );
  };

  const addSavePost = (id: number) => {
    setSavePostId((prev: any) => [...prev, id]);
  };

  const removeSavePost = (id: number) => {
    setSavePostId((prev: any) => prev.filter((postId: any) => postId !== id));
  };

  const value = {
    ids: likePostId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    storyIds: showStoryId,
    addShowStory: addShowStory,
    removeShowStory: removeShowStory,
    savePostIds: savePostId,
    addSavePost: addSavePost,
    removeSavePost: removeSavePost,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
