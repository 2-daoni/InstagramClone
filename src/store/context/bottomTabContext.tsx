import {createContext, useState} from 'react';

export const BottomTabContext = createContext({
  showBottom: true,
  setIsBottomShow: (show: boolean) => {},
});

const BottomTabProvider = ({children}: any) => {
  const [showBottom, setShowBottom] = useState<boolean>(true);

  const setIsBottomShow = (show: boolean) => {
    setShowBottom(show);
  };

  const value = {
    showBottom: showBottom,
    setIsBottomShow,
  };

  return (
    <BottomTabContext.Provider value={value}>
      {children}
    </BottomTabContext.Provider>
  );
};

export default BottomTabProvider;
