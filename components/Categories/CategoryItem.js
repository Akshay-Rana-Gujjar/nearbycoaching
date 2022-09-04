import { BankIcon } from "../Icons";

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
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        className={className + ` position-relative rounded-circle p-3 bg-dark1` }
        style={{background: bgColor}}
      >
        {iconElement || <BankIcon />}
      </div>
      <div  className="small">{name}</div>
    </div>
  );
}
