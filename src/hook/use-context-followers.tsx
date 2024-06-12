import React, { createContext, useContext, useState,ReactNode } from "react";

// Definisikan tipe data untuk konteks
interface TabItemContextType {
  isFollowingClick: boolean;
  isFollowerClick: boolean;
  clickFollowing: () => void;
  clickFollower: () => void;
}

// Buat konteks
export const TabItemContext = createContext<TabItemContextType | null>(null);

// Buat hook kustom untuk mengakses nilai dari konteks
export const useTabItemContext = (): TabItemContextType => {
  const context = useContext(TabItemContext);
  if (!context) {
    throw new Error("useTabItemContext must be used within a TabItemProvider");
  }
  return context;
};

// Buat provider yang menyediakan nilai untuk konteks
export const TabFollowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFollowingClick, setIsFollowingClick] = useState<boolean>(false);
  const [isFollowerClick, setIsFollowerClick] = useState<boolean>(true);

  const clickFollowing = () => {
    setIsFollowingClick(true);
    setIsFollowerClick(false);
  };

  const clickFollower = () => {
    setIsFollowingClick(false);
    setIsFollowerClick(true);
  };

  return (
    <TabItemContext.Provider
      value={{ isFollowingClick, isFollowerClick, clickFollowing, clickFollower }}
    >
      {children}
    </TabItemContext.Provider>
  );
};
