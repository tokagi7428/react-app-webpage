import React from "react";
import "./Banner.css";

let bannerDate = {
  title: "React web page",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quam deserunt eos voluptate ipsam eaque, amet rem eveniet adipisci quia, eius eum velit sunt illo voluptatem laudantium quod aliquam doloribus?",
};

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerDate.title}</h1>
            <p>{bannerDate.desc}</p>
            <a href="#" className="banner-btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
