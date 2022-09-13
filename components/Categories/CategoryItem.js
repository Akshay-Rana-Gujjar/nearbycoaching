import { BankIcon } from "../Icons";
import Link from "next/link";

export default function CategoryItem({
  name = "Banking",
  iconElement,
  className = "",
  text,
  isPopular = true,
  bgColor = "gray",
  gradient: { start = "transparent", end = "transparent" } = {},
}) {
  return (
    <Link href={name ? "/category/" + name.toLowerCase() : null}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          className={
            className + ` position-relative rounded-circle p-3 bg-dark1`
          }
          style={{ background: bgColor }}
        >
          {iconElement || <BankIcon />}
        </div>
        <div className="small">{name}</div>
      </div>
    </Link>
  );
}
