import React from "react";
import CookingPagination from "./CookingPagination";

function CookingVideos() {
  return (
    <div className="cooking-container">
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
        <CookingPagination></CookingPagination>
      </div>
    </div>
  );
}

export default CookingVideos;
