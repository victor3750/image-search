import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize:"1.2rem"
      }}
    >
      <p style={{ width: "50%",border:"0.5rem solid rgb(186, 252, 181)",padding:"1rem"}}>
        此網站為參考Udemy線上課程『2023
        網頁全端開發』製作，透過串接圖片網站API進行圖片搜尋，僅為個人練習作品，無任何商業用途
        <br />
        API來源：
        <a href="https://www.pexels.com/zh-tw/api/" target="_blank" >
          https://www.pexels.com/zh-tw/api/
        </a>
      </p>
    </div>
  );
};

export default About;
