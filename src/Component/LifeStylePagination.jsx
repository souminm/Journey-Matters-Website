import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const LifeStylePagination = () => {
  const [userData, setUserData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    getFunnyData();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(userData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, userData]);

  //

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  //

  const getFunnyData = async () => {
    await axios
      .get("http://localhost:8080/api/get-listing")
      .then((res) => {
        const lifestyleData = res.data.data;
        const final = [];
        const stringify_Object = JSON.stringify(lifestyleData);
        var stringify = JSON.parse(stringify_Object);
        for (var i = 0; i < stringify.length; i++) {
          if (stringify[i]["category"] === "Lifestyle") {
            final.push(stringify[i]);
          }
        }
        if (final.length !== 0) {
          setUserData(final);
        } else {
          setUserData("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function generateFullLink(data) {
    const text1 = "https://img.youtube.com/vi/";
    const text2 = "/hqdefault.jpg";
    const result = text1.concat(data);
    const finalResult = result.concat(text2);
    return finalResult;
  }

  return (
    <div class="container">
      <div class="content-section">
        {currentItems && currentItems?.length > 0
          ? currentItems.map((story) => {
              return (
                <div class="card">
                  <img
                    class="card-img-top"
                    src={generateFullLink(story.link)}
                    alt="Entertainment"
                  ></img>
                  <h4 class="card-title">{story.title}</h4>
                  <a href={story.url} class="btn btn-primary">
                    Watch now on Youtube
                  </a>
                </div>
              );
            })
          : ""}
      </div>
      <div className="pagination-react">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default LifeStylePagination;
