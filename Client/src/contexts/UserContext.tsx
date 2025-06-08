import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User, Emotion } from '../types/common';
import CallGetUser from '../calls/CallGetUser';

interface UserContextType {
  user: User;
  setUserEmotion: (emotion: Emotion | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ name: '', emotion: null });

  // Fetch user details initially
  useEffect(() => {
    CallGetUser().then(setUser);
  }, []);

  const setUserEmotion = (emotion: Emotion | null) => {
    setUser(prev => ({ ...prev, emotion }));
  };

  return (
    <UserContext.Provider value={{ user, setUserEmotion }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};