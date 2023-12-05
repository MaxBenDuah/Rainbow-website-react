import React from "react";

class Clients extends React.Component {
  render () {
    const {image1, image2, image3, image4, image5} = this.props;
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center display-4 brand-text-heading">Our Clients</p>
            <p className="text-center brand-text">We’ve had the pleasure of working with over 500 amazing clients. Check some of them out</p>
          </div>
        </div>

        <div className="row py-5 brand-images">
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img className="img-fluid brand-logo" src={image1} alt="" />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img className="img-fluid brand-logo" src={image2} alt="" />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img className="img-fluid brand-logo" src={image3} alt="" />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img className="img-fluid brand-logo" src={image4} alt="" />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img className="img-fluid brand-logo" src={image5} alt="" />
          </div>

          <p className="text-center">Today, many people rely on computers to do homework, work, and create or store useful information. Therefore, it is important for the information on the computer to be stored and kept properly.</p>
      </div>
      </>
    );
  }
}

export default Clients;