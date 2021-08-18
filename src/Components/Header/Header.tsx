import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">daily.dev</div>

      <div className="header-right">
        <div className="win-epic-prizes">
          <div>Win epic prizes</div>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <g fill="currentcolor" fill-rule="nonzero">
              <path d="M12 9h8a1 1 0 011 1v2a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2a1 1 0 011-1zM12 15h6a1 1 0 011 1v5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-5a1 1 0 011-1zM6 15h2a1 1 0 011 1v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5a1 1 0 011-1zM4 9h4a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1zM12.5 8A2.5 2.5 0 1010 5.5V8h2.5zM8 8a2 2 0 112-2v2H8z"></path>
            </g>
          </svg>
        </div>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M7.828 4h8.343a2 2 0 011.996 1.878l.83 13.591a.5.5 0 01-.795.433l-5.608-4.144a1 1 0 00-1.189 0l-5.608 4.144a.5.5 0 01-.796-.433l.83-13.591A2 2 0 017.829 4z"
            fill="currentcolor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14zm-2-8V7a1 1 0 00-.883-.993L19 6H5a1 1 0 00-.993.883L4 7v4a1 1 0 00.883.993L5 12h14a1 1 0 001-1zM8 17v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm6 0v-2a1 1 0 00-.883-.993L13 14h-2a1 1 0 00-.993.883L10 15v2a1 1 0 00.883.993L11 18h2a1 1 0 001-1zm6 0v-2a1 1 0 00-.883-.993L19 14h-2a1 1 0 00-.993.883L16 15v2a1 1 0 00.883.993L17 18h2a1 1 0 001-1z"
            fill="currentcolor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
