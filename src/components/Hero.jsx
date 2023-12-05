import React from "react";

const Hero = function () {
  return (
    <>
      <div className="row middle-section">
        <div className="col-md-4 dots-image">
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img src="https://d33wubrfki0l68.cloudfront.net/64024a1dfc04740c6b05dc1f3da02188e8fa2ee8/9267b/images/heroes-img/app-screen-1.jpg" alt="" className="img-fluid first-image shadow" />
          <img className="img-fluid middle-image shadow" src="https://d33wubrfki0l68.cloudfront.net/46ebe0bcac347d149164816975c847b831914fb0/d9552/images/heroes-img/app-screen-2.jpg" alt="" />
          <img className="img-fluid third-image shadow" src="https://d33wubrfki0l68.cloudfront.net/df1d91f60b80c9236f4dc53a5c1d8feae84bd77a/b73e9/images/heroes-img/app-screen-3.jpg" alt="" />
        </div>
        <div className="col-md-4 dots-image2">
        </div>
      </div>
    </>
  );
}

export default Hero;