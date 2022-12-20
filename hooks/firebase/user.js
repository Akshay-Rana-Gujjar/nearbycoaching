import { USER_COLLECTION } from '../../constants/firebase';
import useCollection from "./collection";

export default function useUserCollection() {
    const { addToCollection: addUser, getCollecton: getUser, processing } = useCollection(USER_COLLECTION);

    return {
        addUser,
        getUser,
        processing,
    }
}

