import React, { createContext, useContext, useState } from "react";

// Definisikan tipe data untuk konteks
interface TabItemContextType {
  isMediaClick: boolean;
  isPostClick: boolean;
  clickMedia: () => void;
  clickPost: () => void;
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
export const TabItemProvider: React.FC = ({ children }) => {
  const [isMediaClick, setIsMediaClick] = useState<boolean>(false);
  const [isPostClick, setIsPostClick] = useState<boolean>(true);

  const clickMedia = () => {
    setIsMediaClick(true);
    setIsPostClick(false);
  };

  const clickPost = () => {
    setIsMediaClick(false);
    setIsPostClick(true);
  };

  return (
    <TabItemContext.Provider
      value={{ isMediaClick, isPostClick, clickMedia, clickPost }}
    >
      {children}
    </TabItemContext.Provider>
  );
};
