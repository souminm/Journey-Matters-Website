import React from "react";
import { Link } from "react-router-dom";
import { getData, deleteData } from "../Services/BlogService";
import { useState, useEffect } from "react";
import { useFormData } from "../Services/FormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./table.css";
import ReactPaginate from "react-paginate";

const ViewListing = () => {
  const { setFormData } = useFormData();
  //Pagination
  const [userData, setUserData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  //

  const onUpdate = (item) => {
    setFormData(item);
  };

  useEffect(() => {
    fetchData();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(userData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, userData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  const fetchData = async () => {
    await getData()
      .then((res) => {
        const cookingData = res.data.data;
        const final = [];
        const stringify_Object = JSON.stringify(cookingData);
        var stringify = JSON.parse(stringify_Object);
        for (var i = 0; i < stringify.length; i++) {
          if (stringify[i]["category"] !== "") {
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

  const deleteListing = async (id, e) => {
    var response = await deleteData(id);
    console.log(id, "id");
    console.log(response, "response");
    if (response.data.success === true) {
      const newUserData = userData.filter((data) => data.id !== id);
      setUserData(newUserData);
      toast.success("listing deleted successfully .");
    } else {
      toast.error("listing deletion failed .");
    }
  };

  return (
    <div className="view-listing">
      <ToastContainer />
      <h1>View All Listings!</h1>
      {currentItems && currentItems?.length > 0 && (
        <div className="table-container">
          <div className="header-fixed">
            <table>
              <thead>
                <tr>
                  <th>Date of Creation</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Img Link</th>
                  <th>Video Url</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((post) => (
                  <tr>
                    <td>{post.createdAt}</td>
                    <td>{post.category}</td>
                    <td>{post.title}</td>
                    <td>
                      <img
                        src={
                          "https://img.youtube.com/vi/" +
                          post.link +
                          "/hqdefault.jpg"
                        }
                        style={{
                          width: "100px",
                          height: "50px",
                        }}
                        alt="youtube videos"
                      />
                    </td>
                    <td>{post.url}</td>
                    <td>
                      <div className="actions">
                        <div>
                          <button
                            id={post._id}
                            onClick={(e) => deleteListing(post._id, e)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                        <div>
                          <Link to={`/update-listing/${post._id}`}>
                            <button
                              onClick={() => onUpdate(post)}
                              className="btn btn-info"
                            >
                              update
                            </button>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Pagination */}
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

      {/* Pagination end */}
      <div>
        <Link to="/create-listing">
          <button className="btn btn-danger">Prev</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewListing;
