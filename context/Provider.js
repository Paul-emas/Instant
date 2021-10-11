import { createContext } from 'react';
import useCombinedReducer from '../hooks/useCombinedReducer';

const AppContext = createContext();

const Provider = ({ children }) => {
  const value = useCombinedReducer();
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, Provider };
