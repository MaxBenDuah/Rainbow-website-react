import React from "react";

const Header = function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="https://www.google.com/"><img className="nav-logo" src="https://d33wubrfki0l68.cloudfront.net/cde83120fccbda21f7fbf5807136f08f60498d7b/fa756/images/main/logo-color@2x.png" alt="Rainbow Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active text-primary font-weight-bold" href="https://www.google.com/">Product <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="https://www.google.com/">Download</a>
            <a className="nav-link" href="https://www.google.com/">Support</a>
            <a className="nav-link" href="https://www.google.com/">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

