import { FACULTY_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";

export default function useFacultyCollction() {
    const { addToCollection: addFaculty, getCollecton: getFaculties, processing } = useCollection(FACULTY_COLLECTION);

    return {
        addFaculty,
        getFaculties,
        processing,
    }
}