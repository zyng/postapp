import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux'

const Navigation = (props) => {

  const links = props.auth.uid ? <SignedInLinks profile={props.profile} /> : <SignedOutLinks />

  return (
    <header>
      <nav>
        <Link to="/" className="header__logo">
          POST<span>UR</span>POST
        </Link>

        <div className="header__action">
          {links}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navigation);
