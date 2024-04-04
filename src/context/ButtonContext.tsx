import React, { createContext, useState, useContext, ReactNode } from 'react';

const BtnContext = createContext<MyContextType | undefined>(undefined);

interface MyContextType {
  activeBtn: number;
  setActiveBtn: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: ReactNode
}

export const BtnContextProvider: React.FC<Props> = ({ children }) => {
  const [activeBtn, setActiveBtn] = useState<number>(0);

  return (
    <BtnContext.Provider value={{ activeBtn, setActiveBtn }}>
      {children}
    </BtnContext.Provider>
  );
};

export const useBtnContext = (): MyContextType => {
  const context = useContext(BtnContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};