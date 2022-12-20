import { createContext, useState } from "react";
import useCategoryCollection from "../../hooks/firebase/category";



export const StoreContext = createContext();



export default ({ children }) => {

    const [collections, setCollections] = useState({});

    const { getCategories } = useCategoryCollection();


    async function getCategoriesCollection() {

        try {
            if (!collections.categories) {
                const categories = await getCategories();
                console.log({ categories })
                setCollections(prev => ({ ...prev, categories }));
                return categories;
            }
            console.log("No EXTRA CALL");
            return collections.categories;
        } catch (error) {
            console.error(error);
        }
    }



    return <StoreContext.Provider value={{
        collections,
        getCategoriesCollection
    }}  >
        {children}
    </StoreContext.Provider>
}