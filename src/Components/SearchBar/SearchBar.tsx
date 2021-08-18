import React, { useState } from "react";
import "./SearchBar.css";

const tabs = [
  { name: "Popular" },
  { name: "Upvoted" },
  { name: "Discussed" },
  { name: "Recent" },
];

function SearchBar() {
  const [searchActive, setSearchActive] = useState(false);

  if (searchActive) {
    return (
      <div className="" onClick={() => setSearchActive(false)}>
        <input type="text" className="search-input"></input>
      </div>
    );
  }

  return (
    <div className="search-container">
      <div className="search-name" onClick={() => setSearchActive(true)}>
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M17.94 15.82l2.122 2.12a1.5 1.5 0 11-2.121 2.122l-2.122-2.121a1.5 1.5 0 012.122-2.122zm-7.44-.32a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z"
            fill="currentcolor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      {tabs.map((item, idx) => {
        return (
          <div key={idx} className="search-name">
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchBar;
