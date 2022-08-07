/* eslint-disable @next/next/no-img-element */
import CategoryItem from "./CategoryItem";
import styles from "./styles.module.css";

export default function Categories() {
  return (
    <div className={styles.categories_container}>
      <CategoryItem />
      <CategoryItem
        iconElement={
          <img
            className="img-fluid1"
            alt="a"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
            src="https://freepngimge.com/wp-content/uploads/2020/02/20200224_171210.png"
          />
        }
        name={"SSC"}
      />
      <CategoryItem
      bgColor="linear-gradient(180deg, rgba(5, 0, 255, 0.2) -5.88%, rgba(5, 0, 255, 0.2) 45.91%, rgba(0, 26, 255, 0) 88.24%), #FADBFF;"
        iconElement={
          <img
            src="https://pngimg.com/uploads/coat_arms_india/coat_arms_india_PNG5.png"
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
            alt="s"
          />
        }
      />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}
