import { PROMOTION_COLLECTION } from "../../constants/firebase";
import useCollection from "./collection";

export default function usePromotionCollction() {
    const { addToCollection, getCollecton, processing } = useCollection(PROMOTION_COLLECTION);
    
    return {
        addPromotion,
        getPromotion,
        processing,
    }
}