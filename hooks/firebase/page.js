import { PAGE_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";


export default function usePageCollection() {
    const {addToCollection: addPage, getCollecton: getPages, processing} = useCollection(PAGE_COLLECTION);
    return {
        addPage,
        getPages,
        processing,
    }

}