import { useState,useEffect,useRef } from "react";
 const useButtonLoader = (defaultText="Load",loadingText="Loading...") =>{
    const [isLoading,setLoading] = useState(false);
    const element = useRef(null);

    useEffect(()=>{
        if(isLoading){
            element.current.innerHTML =  loadingText + `<i className="fas fa-spinner fa-spin"></i>`;
        }else{
            element.current.innerHTML = defaultText;
        }
    }, [isLoading]);

    return [element,setLoading];
 }

 export default useButtonLoader;