import { createContext, useState } from "react";

export const UserContext = createContext();

const userMockName = 'Username';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = () => { setUser(userMockName) };
  const logout = () => { setUser(null) };

  const contextValue = {
    user,
    login,
    logout
  };

  return (
    <UserContext value={contextValue}>
      {children}
    </UserContext>
  )
};
