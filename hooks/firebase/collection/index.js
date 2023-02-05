import { addDoc, collection, getDocs, query, where, doc as Doc, getDoc } from "firebase/firestore";
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

    async function getDocumentsByQuery(queryList = []) {
        try {
            setProcessing(true);
            const constraints = queryList.map(q=>{
                return where(q.property, q.operator, q.value);
            });
            console.log({constraints});
            const _query = query(collection(db, COLLECTION), ...constraints)
            const querySnapshot = await getDocs(_query);
            return querySnapshot.docs?.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (error) {
            console.error({error})
            throw new Error(error);
        } finally{
            setProcessing(false);
        }
    }

    async function getDocument(docId) {
        if(!docId) throw "Document id required.";
        try {
            setProcessing(true);
            const docRef = Doc(db, COLLECTION, docId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                return { ...docSnap.data(), id: docSnap.id }
            } else {
                throw "No such document!";
            }
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
        getDocument,
        getDocumentsByQuery,
        processing
    }
}