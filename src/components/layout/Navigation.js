import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="header__logo">
          POST<span>UR</span>POST
        </Link>

        <div className="header__action">
          <SignedIn />
          <SignedOut />
        </div>

      </nav>
    </header>
  );
};

export default Navigation;
