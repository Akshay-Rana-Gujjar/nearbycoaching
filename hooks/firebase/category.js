import { CATEGORY_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";


export default function useCategoryCollection() {

    const {
        addToCollection: addCategory,
        getCollecton: getCategories,
        processing
    } = useCollection(CATEGORY_COLLECTION);

    return {
        addCategory,
        getCategories,
        processing,
    }
}