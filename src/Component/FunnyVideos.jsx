import React from "react";
import Pagination from "./Pagination";

const FunnyVideos = () => {
  return (
    <div className="funny-container">
      <h4
        style={{
          paddingLeft: "30px",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        #Trending Videos
      </h4>
      <div>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default FunnyVideos;
