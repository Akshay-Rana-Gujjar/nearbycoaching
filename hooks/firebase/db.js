import { useRef } from "react";
import { getFirestore } from "firebase/firestore";
export function useDB(){
    const db = useRef(getFirestore()).current;
    return db;
}