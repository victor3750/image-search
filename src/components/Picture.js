import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="textContainer">
        <p>
          下載圖片：
          <a target="_blank" href={data.src.large}>
            點我
          </a>
        </p>
        <p className="photoGrapher">
          photo by <span>{data.photographer}</span>
        </p>
      </div>
    </div>
  );
};

export default Picture;
