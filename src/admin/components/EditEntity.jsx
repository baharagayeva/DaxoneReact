import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../assets/constants/ApiUrl";
import axios from "axios";

const EditEntity = ({ entityName, propertyNames }) => {
  // Get the ID parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/Category`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/${entityName}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.json();
        if (!res.success) {
          const updatedErrorMessages = {};
          propertyNames.forEach((prop) => {
            const dataIndex = res.data.indexOf(
              prop.charAt(0).toUpperCase() + prop.slice(1)
            );
            if (dataIndex !== -1) {
              updatedErrorMessages[prop] = res.messages[dataIndex];
            } else {
              updatedErrorMessages[prop] = "";
            }
          });
          setValidationErrors((prevValues) => ({
            ...prevValues,
            ...updatedErrorMessages,
          }));
        } else {
          navigate(`/admin/${entityName}`);
          console.log("Data updated successfully");
        }
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/${entityName}/${id}`);

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error(
            `Failed to fetch ${entityName}. Server responded with status:`,
            response.status
          );
        }
      } catch (error) {
        console.error(`Error fetching ${entityName}:`, error);
      }
    };

    fetchData();
  }, [apiUrl, entityName, id]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  {`Edit ${entityName}`}
                </h3>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12">
                    {propertyNames.map((propertyName) => (
                      <div className="form mb-3 mb-md-3" key={propertyName}>
                        <label htmlFor={propertyName}>
                          {propertyName === "categoryID"
                            ? "Category"
                            : propertyName.charAt(0).toUpperCase() +
                              propertyName.slice(1)}
                        </label>
                        {propertyName === "imgPath" ? (
                          <input
                            type="file"
                            id={propertyName}
                            name={propertyName}
                            className="form-control"
                            placeholder={`enter ${propertyName}`}
                            onChange={(e) =>
                              setData({
                                ...data,
                                [propertyName]: e.target.files[0],
                              })
                            }
                          />
                        ) : propertyName === "discount" ||
                          propertyName === "stockCount" ||
                          propertyName === "price" ||
                          propertyName === "salePrice" ? (
                          <input
                            type="number"
                            id={propertyName}
                            name={propertyName}
                            value={data[propertyName]}
                            className="form-control"
                            placeholder={`enter ${propertyName}`}
                            onChange={(e) =>
                              setData({
                                ...data,
                                [propertyName]: e.target.value,
                              })
                            }
                          />
                        ) : propertyName === "categoryID" ? (
                          <select
                            className="ms-3 p-2 rounded border border-secondary"
                            value={data.categoryID}
                            onChange={(e) =>
                              setData({ ...data, categoryID: e.target.value })
                            }
                          >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            id={propertyName}
                            name={propertyName}
                            value={data[propertyName] || ""}
                            className="form-control"
                            placeholder={`enter ${propertyName}`}
                            onChange={(e) =>
                              setData({
                                ...data,
                                [propertyName]: e.target.value,
                              })
                            }
                          />
                        )}
                        <span style={{ color: "red" }}>
                          {validationErrors[propertyName]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 mb-0">
                  <button onClick={editHandler} className="btn btn-success">
                    Save
                  </button>
                  <Link
                    to={`/admin/${entityName}`}
                    className="btn btn-danger ms-3"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEntity;
