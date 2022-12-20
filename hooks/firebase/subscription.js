import { SUBSCRIPTION_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";


export default function useSubscriptionCollection() {

    const { addToCollection: addSubscription, getCollecton: getSubscriptions, processing } = useCollection(SUBSCRIPTION_COLLECTION);

    return {
        addSubscription,
        getSubscriptions,
        processing,
    }

}