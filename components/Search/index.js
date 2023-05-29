import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({
  onChange = () => {},
  suggestionsList = ["Pre", "Pre 123"],
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="position-relative w-100">
      <div className="rounded-pill border p-1 d-flex w-100">
        <div className="search-bar__icon me-2">
          <IoSearch size={24} color={"#FFD233"} />
        </div>
        <div className="border"></div>
        <div className="search-bar__search-input flex-grow-1">
          <input
            placeholder="Search your course here"
            onChange={onChange}
            className={`w-100   bg-transparent border-0 ps-2`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
      {isFocused && Boolean(suggestionsList.length) && <div className="position-absolute top-100 w-100 p-0 bg-white border mt-2 rounded shadow-lg">
        <ul className="list-group list-group-flush">
          {suggestionsList.map((item) => (
            <li className="list-group-item">
              <div className="">
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: item?.highlight?.courseTitle?.join(" ") || item?._source?.courseTitle ,
                  }}
                ></div>
                {item?._source?.courseType}
              </div>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  );
}
