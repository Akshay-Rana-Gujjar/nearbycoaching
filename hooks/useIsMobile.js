import { useEffect, useState } from "react";
import isMobile from "../utils/isMobile";

export default function useIsMobile(){

    const [isMobo, setIsMobo] = useState(false);

    useEffect(()=>{
        setIsMobo(isMobile);
    },[]);
    return isMobo;
}