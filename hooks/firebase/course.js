import { COURSE_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";

export default function useCourseCollction() {

    const { addToCollection: addCourse, getCollecton: getCourses, processing } = useCollection(COURSE_COLLECTION);

    return {
        addCourse,
        getCourses,
        processing,
    }
}