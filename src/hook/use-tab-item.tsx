import { createContext, ReactNode, useContext, useState } from "react";

interface TabItemContextType {
  isMediaClick: boolean;
  isPostClick: boolean;
  clickMedia: () => void;
  clickPost: () => void;
}

const TabItemContext = createContext<TabItemContextType | undefined>(undefined);

export const useTabItemContext = (): TabItemContextType => {
  const context = useContext(TabItemContext);
  if (!context) {
    throw new Error("useTabItemContext must be used within a TabItemProvider");
  }
  return context;
};

interface TabItemProviderProps {
  children: ReactNode;
}

export const TabItemProvider: React.FC<TabItemProviderProps> = ({ children }) => {
  const [isMediaClick, setIsMediaClick] = useState<boolean>(false);
  const [isPostClick, setIsPostClick] = useState<boolean>(true);

  const clickMedia = () => {
    if (!isMediaClick) {
      setIsMediaClick(true);
      setIsPostClick(false);
    }
  };

  const clickPost = () => {
    if (!isPostClick) {
      setIsPostClick(true);
      setIsMediaClick(false);
    }
  };

  return (
    <TabItemContext.Provider value={{ isMediaClick, isPostClick, clickMedia, clickPost }}>
      {children}
    </TabItemContext.Provider>
  );
};
