import React from "react";

class Footer extends React.Component {
  
  render () {
    const {copyright} = this.props;
    
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <p className="text-center mb-0">
                  <a href="https://www.google.com/"><img className="nav-logo" src="https://d33wubrfki0l68.cloudfront.net/cde83120fccbda21f7fbf5807136f08f60498d7b/fa756/images/main/logo-color@2x.png" alt="Rainbow Logo" /></a>
                </p>
                <p className="text-muted small ml-n5 mb-0">{copyright}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <img className="brand-icon mr-3" src="https://d33wubrfki0l68.cloudfront.net/1213d33c8f12dba9ddb95beb578060d9349c56ea/e71e5/images/icons/facebook.svg" alt="" />
                <img className="brand-icon mr-3" src="https://d33wubrfki0l68.cloudfront.net/35036931da68406c8d6462249141ef4f6ba5239a/7c5f5/images/icons/googleplus.svg" alt="" />
                <img className="brand-icon mr-3" src="https://d33wubrfki0l68.cloudfront.net/7dce9f8438882bbc2d5aeff26c696e067a17fcb4/e6580/images/icons/twitter.svg" alt="" />
                <img className="brand-icon" src="https://d33wubrfki0l68.cloudfront.net/1404eeae8b1a127c321e7a32548f09cae5f8ad4c/4f50f/images/icons/instagram.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;