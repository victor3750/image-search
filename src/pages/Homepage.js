import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "GKa1SWWwKGtPR1UNUB9z8hbszgA6vgUhWUrjDf4LRGI8YxrLW8g8DLJM";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // 一進入頁面時先推薦精選圖片
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    if(input!== "" &&!/^\s*$/.test(input)){
      // /^\s*$/.test(input) input 若含有一或多個空格返回true
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      setData(result.data.photos);
      setCurrentSearch(input);
    }
  };

  const featuredImage = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
};

  // closure 函式執行前已經確定page的值，因此必須使用${page + 1}而非${page}
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);

    if (currentSearch === "") {
      // 尚未輸入搜尋關鍵時點選更多圖片=>推薦更多精選圖片
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }

    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos)); //讓現有array串接新獲取的array
  };

  useEffect(() => {
    featuredImage();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
        input={input}
      />
      <div className="pictures">
        {data &&
          data.map((d, index) => {
            return <Picture data={d} key={index} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
