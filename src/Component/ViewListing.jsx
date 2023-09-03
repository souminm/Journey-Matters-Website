import React from "react";
import { Link } from "react-router-dom";
import blogService from "../Services/BlogService";
import { useState, useEffect } from "react";
import { useFormData } from "../Services/FormContext";

const ViewListing = () => {
  // const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { formData, setFormData } = useFormData();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const count = userData.length;
  let pages = [];

  //

  const onUpdate = (item) => {
    setFormData(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await blogService
      .getData()
      .then((res) => {
        console.log(res, "result");
        const cookingData = res.data.data;
        const final = [];
        const stringify_Object = JSON.stringify(cookingData);
        var stringify = JSON.parse(stringify_Object);
        for (var i = 0; i < stringify.length; i++) {
          if (stringify[i]["category"] !== "") {
            final.push(stringify[i]);
          }
        }
        console.log(final, "final Data");
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
    var response = await blogService.deleteData(id);
    if (response.data.success === true) {
    //  alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.parentElement.parentElement.remove();
    } else {
      alert(response.data.msg);
    }
  };
  //Pagination
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 1; i <= Math.ceil(count / itemsPerPage); i++) {
    pages.push(i);
  }

  const itemsToDisplay = Array.from(userData).slice(startIndex, endIndex);
  console.log(itemsToDisplay);
  return (
    <div className="view-listing">
      <div>
      <br></br>
        <h1>View All Listings!</h1>
        {itemsToDisplay && itemsToDisplay?.length > 0 && (
          <table className="list-table">
            <thead>
              <th>Date of Creation</th>
              <th>Category</th>
              <th>Title</th>
              <th>Img Link</th>
              <th>Video Url</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {console.log(itemsToDisplay, "items")}
              {itemsToDisplay.map((post) => (
                <tr>
                  {console.log(post, "attributes")}
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
                        width: "275px",
                        height: "150px",
                        paddingLeft: "10px",
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
                        >
                          Delete
                        </button>
                      </div>
                      <div>
                        <Link
                          style={{ paddingTop: "20px" }}
                          to={`/update-listing/${post._id}`}
                        >
                          <button onClick={() => onUpdate(post)}>update</button>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Pagination */}
      <div className="pagination1">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Pagination end */}

      <div>
        <Link className="create-listing" to="/create-listing">
          <button>Prev</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewListing;
