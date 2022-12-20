import { USER_GROUP_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";

export default function useUserGroupCollction() {

    const { addToCollection: addUserGroup, getCollecton: getUserGroups, processing } = useCollection(USER_GROUP_COLLECTION);

    return {
        addUserGroup,
        getUserGroups,
        processing,
    }
}