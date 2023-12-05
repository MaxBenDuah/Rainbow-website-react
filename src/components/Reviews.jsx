import React from "react";

class Reviews extends React.Component {
  render () {
    return (
      <>
        <div className="row">
        <div className="col-md-4">
          <img src="https://d33wubrfki0l68.cloudfront.net/b7dc03e33217205ce443518633fc9078402080f2/16d27/images/heroes-img/model-half.png" alt="" />
          
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className="quote-div">
            <img className="quote-img" src="https://www.pngmart.com/files/8/Quotation-Mark-Transparent-Images-PNG.png" alt="" />
          </div>
          <div className="card border-0 px-5">
            <div className="card-body">
              <p className="card-text font-italic font-weight-light">Have you ever heard the expression, “Do not count your chickens before<br /> they hatch?” Maybe an older, wiser individual would tell you this to keep<br /> you from getting ahead of yourself. Like buying a new car before you<br /> actually got that new job.</p>
              <h6 className="card-title text-uppercase text-primary font-weight-bold">Lilly Lyons</h6>
              <img className="pt-2 slack-img" src="https://d33wubrfki0l68.cloudfront.net/6677ee5d14f4218032b1f106b49aa00167ff9ebd/7ea8b/images/icons/slack@2x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Reviews;