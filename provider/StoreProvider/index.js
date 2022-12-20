import { createContext, useRef } from "react";
import { CATEGORIES, COURSES } from "../../constants/storeprovider";
import useCategoryCollection from "../../hooks/firebase/category";
import useCourseCollection from "../../hooks/firebase/course";



export const StoreContext = createContext();



export default ({ children }) => {

    const collections = useRef({});

    const { getCategories } = useCategoryCollection();
    const { getCourses, getCoursesByCategory: _getCoursesByCategory } = useCourseCollection();



    async function getCollectionByName(collectionName) {

        try {

            if (collections.current[collectionName]) {
                console.log("No EXTRA CALL");
                return collections.current[collectionName];
            }

            let data = null;
            switch (collectionName) {
                case COURSES:
                    data = await getCourses()
                    break;
                case CATEGORIES:
                    data = await getCategories()
                    break;

                default:
                    throw "Collection name not found";
            }


            collections.current = { ...collections.current, [collectionName]: data };
            return data;
        } catch (error) {
            console.error(error);
        }
    }


    async function getCategoriesCollection() {

        try {
            const categories = await getCollectionByName(CATEGORIES);
            return categories;
        } catch (error) {
            console.error(error);
        }
    }

    async function getCoursesCollection() {

        try {
            const courses = await getCollectionByName(COURSES);
            return courses;
        } catch (error) {
            console.error(error);
        }
    }

    async function getCoursesByCategory(){
        
    }



    return <StoreContext.Provider value={{
        collections,
        getCategoriesCollection,
        getCoursesCollection
    }}  >
        {children}
    </StoreContext.Provider>
}