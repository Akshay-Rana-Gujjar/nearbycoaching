import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useDB } from "../db";

export default function useCollection(COLLECTION) {
    if(!COLLECTION) throw "Collection name requried."
    const db = useDB();
    const [processing, setProcessing] = useState(false); 
    async function addToCollection(data) {
        try {
            setProcessing(true);
            if (!data || !Object.keys(data).length)
                throw new Error(COLLECTION+" data cannot be null or empty.");
            return await addDoc(collection(db, COLLECTION), data);
        } catch (error) {
            throw new Error(error);
        } finally{
            setProcessing(false);
        }
    }

    async function getCollecton() {
        try {
            setProcessing(true);
            const querySnapshot = await getDocs(collection(db, COLLECTION));
            return querySnapshot.docs?.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (error) {
            throw new Error(error);
        } finally{
            setProcessing(false);
        }
    }


    async function getCollectonByField(field, value) {
        try {
            setProcessing(true);
            const _query = query(collection(db, COLLECTION), where(field,"==",value))
            const querySnapshot = await getDocs(_query);
            return querySnapshot.docs?.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (error) {
            throw new Error(error);
        } finally{
            setProcessing(false);
        }
    }

    return {
        addToCollection,
        getCollecton,
        getCollectonByField,
        processing
    }
}