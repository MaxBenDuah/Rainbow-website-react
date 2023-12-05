import React from "react";

const Jumbotron = function () {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="display-4 intro-text">Perfect for busy people</p>
          <p className="text-muted">With TaskTrack you will never lose track of your busy schedule. We promise :)</p>
          <button type="button" className="btn btn-outline-secondary text-capitalize text-dark shadow google-play mt-4">Google play</button>
          <button type="button" className="btn btn-outline-secondary text-capitalize text-dark shadow apple mt-4"><i className="fa-brands fa-apple fa-xl apple-logo"></i> App store</button>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;