import { useState } from "react";
const useFormHandel = ()=>{
    const [filterId,setFilterId] = useState([])
    return [filterId, setFilterId];
};
export default useFormHandel