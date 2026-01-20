"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface FollowContextType {
  following: number[]; 
  toggleFollow: (id: number) => void;
}

const FollowContext = createContext<FollowContextType | undefined>(undefined);

export const FollowProvider = ({ children }: { children: ReactNode }) => {
  const [following, setFollowing] = useState<number[]>([]);

  const toggleFollow = (id: number) => {
    setFollowing((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <FollowContext.Provider value={{ following, toggleFollow }}>
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => {
  const context = useContext(FollowContext);
  if (!context) throw new Error("useFollow must be used within FollowProvider");
  return context;
};
