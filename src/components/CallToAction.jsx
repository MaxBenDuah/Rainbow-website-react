import React from "react";

class CallToAction extends React.Component {
  render () {
    const {downloadText, description} = this.props;
    return (
      <>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <div className="cta-buttons">
                <p className="text-center text-white display-4 cta-heading font-weight-light">{downloadText}</p>
                <p className="text-center text-white">{description}</p>
                <div className="text-center">
                  <button type="button" className="btn btn-outline-secondary text-capitalize text-dark shadow google-play mt-5 bg-white">Google play</button>
                  <button type="button" className="btn btn-outline-secondary text-capitalize text-dark shadow apple mt-5 bg-white"><i className="fa-brands fa-apple fa-xl apple-logo"></i> App store</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CallToAction;