// Top level App component
import  {  useContext} from "react";
import { ProfContext} from '@/store/contexts/ProfContext'

const useProf = () => {
  return useContext(ProfContext);
};
export default useProf
