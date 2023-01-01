import React, { useEffect } from "react";
import "./HeaderCarousel.css";

function HeaderCarousel() {
  var clearRotation;
  useEffect(() => {
    clearRotation = window.loadCircleAnimation();

    return () => {
      clearTimeout(clearRotation);
    };
  }, []);

  return (
    <>
      <div className="" style={{ height: "100%" }}>
        <div className="w-100" style={{ padding: "7% 0%" }}>
          <div className="holderCircle">
            <div className="dotCircle">
              <span className="itemDot active itemDot1" data-tab="1">
                <img src="images/mineral.webp" loading="eager" className="" alt=".. " style={{ height: "200%" }} />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot2" data-tab="2">
                <img src="images/basil.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot3" data-tab="3">
                <img src="images/clove.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot4" data-tab="4">
                <img src="images/lemon.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot5" data-tab="5">
                <img src="images/amla.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot6" data-tab="6">
                <img src="images/honey.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot7" data-tab="7">
                <img src="images/mint.webp" loading="eager" className="" alt=".. " />
                <span className="forActive"></span>
              </span>
            </div>

            <div className="contentCircle" style={{ background: "#0000FF url(images/logo.svg) no-repeat center", backgroundSize: "80px" }}>
              <div className="CirItem active CirItem1">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem2">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem3">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem4">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem5">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem6">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
              <div className="CirItem CirItem7">
                <img src="images/logo.svg" className="w-75" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderCarousel;
