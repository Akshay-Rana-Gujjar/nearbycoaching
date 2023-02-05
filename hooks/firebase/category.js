import { CATEGORY_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";


export default function useCategoryCollection() {

    const {
        addToCollection: addCategory,
        getCollecton: getCategories,
        getDocument: getCategory,
        getCollectonByField: getCategoryByField,
        getDocumentsByQuery,
        processing
    } = useCollection(CATEGORY_COLLECTION);

    return {
        addCategory,
        getCategories,
        getCategory,
        getCategoryByField,
        getDocumentsByQuery,
        processing,
    }
}