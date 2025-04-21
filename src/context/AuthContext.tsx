"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "@/types";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  user: User | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (user: User) => {
    setIsLoggedIn(true);
    setUser(user);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
