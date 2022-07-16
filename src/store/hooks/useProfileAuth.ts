import { useContext, } from 'react';
import { ProfileAuthContext } from '@/store/contexts/ProfileAuthContext'
const useProfileAuth = () => {
  return useContext(ProfileAuthContext);
};

export default useProfileAuth