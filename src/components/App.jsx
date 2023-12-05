import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Hero from "./Hero";
import Design from "./Design";
import Clients from "./Clients";
import Reviews from "./Reviews";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const App = function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header />
            <Jumbotron />
            <Hero />
          </div>
        </div>
      </div>

      <Design />

      <div className="container brand-section">
        <Clients image1="https://d33wubrfki0l68.cloudfront.net/85665c12580b928a001222e93f3605ad0a5b7649/659a9/images/icons/microsoft@2x.png" image2="https://d33wubrfki0l68.cloudfront.net/ba2b92bd1fba2097b74ee0c5bf96397ca267b13c/bb259/images/icons/airbnb@2x.png" image3="https://d33wubrfki0l68.cloudfront.net/6677ee5d14f4218032b1f106b49aa00167ff9ebd/7ea8b/images/icons/slack@2x.png" image4="https://d33wubrfki0l68.cloudfront.net/a5452662652c540b1a06e41bc7d566b23e60e7a5/b9f59/images/icons/google@2x.png" image5="https://d33wubrfki0l68.cloudfront.net/9ecb00b0bd4f9588fbd7391af00e6b7c25446edc/de37b/images/icons/marvel@2x.png" />
        <Reviews />
      </div>

      <CallToAction downloadText="Download the app" description="Grab SmartChat from Google Play or App Store and start chatting with your friends." />
      <Footer copyright="&copy; Copyright 2017. All rights reserved" />
    </>
  );
}

export default App;