import { BankIcon } from "../Icons";
import Link from "next/link";
import useIsMobile from '../../hooks/useIsMobile';

export default function CategoryItem({
  title = "Banking",
  iconElement,
  className = "",
  text,
  isPopular = true,
  bgColor = "gray",
  gradient: { start = "transparent", end = "transparent" } = {},
  id: categoryId
}) {
  const isMobile = useIsMobile()
  return (
    <Link href={title ? "/category/" + title.toLowerCase().replaceAll(" ", "-")+"-"+categoryId : null}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          className={
            className + ` position-relative rounded-circle p-3 bg-dark1`
          }
          style={{ background: isMobile ? bgColor : "#f2f2f2" }}
        >
          {iconElement || <BankIcon />}
        </div>
        <div className="small text-nowrap text-truncate" style={{maxWidth: "100px"}} >{title}</div>
      </div>
    </Link>
  );
}
