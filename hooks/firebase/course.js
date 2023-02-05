import { COURSE_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";

export default function useCourseCollection() {
  const {
    addToCollection: addCourse,
    getCollecton: getCourses,
    processing,
    getDocumentsByQuery,
    getCollectonByField,
    getDocument
  } = useCollection(COURSE_COLLECTION);

  async function getCoursesByCategory(category) {
    return await getCollectonByField("category", category);
  }

  return {
    addCourse,
    getCourses,
    getCoursesByCategory,
    getDocumentsByQuery,
    getDocument,
    processing,
  };
}
