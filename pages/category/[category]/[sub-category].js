import { useRouter } from "next/router";


export default function SubCatgeory() {
    const router = useRouter();
    const subCategory = router.query["sub-category"];
    const { category } = router.query;

    console.log({subCategory, category});

    return (
        <div>Akshay</div>
    );
}