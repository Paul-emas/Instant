import { useContext } from 'react';
import { AppContext } from '../context/Provider';

export const useGlobalContext = () => {
  return useContext(AppContext);
};
