import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import "./menuDetails.scss";
import Checkbox from "@mui/material/Checkbox";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddProducts from "./addProductsMenu/AddProducts";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { inventoryServices } from "../../../../Services/InventoryServices";

const Date = [
  {
    id: 1,
    Status: "active",

    Image:
      "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",

    Name: "Deyries deep fry burger",

    Category: "Burger",

    Price: 8.0,
  },
  {
    id: 2,
    Status: "block",

    Image:
      "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",

    Name: "Margreta ",

    Category: "Pizza",

    Price: 4.0,
  },

  {
    Status: "block",
    id: 3,
    Image:
      "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",

    Name: "chicken burger",

    Category: "Burger",

    Price: 10.0,
  },
];

function MenuDetails() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [clickedTr, SetClickedTr] = useState("");

  // search

  const [search, setSearch] = useState("");

  //  sorting

  const [nameSorting, setNameSorting] = useState(false);
  const [categorysorting, setCategorySorting] = useState(false);
  const [statusSorting, setStatusSorting] = useState(false);

  //add and edit States

  const [addProducts, setAddProducts] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [mainpage, setMainPage] = useState(true);
  const [updatableProducts, setUpdatableProducts] = useState([]);

  const [data, setData] = useState([]);
  const [datatoRender, setDataTorender] = useState([]);

  // this useeffect is used to sort the data initialy to decending order
  useEffect(() => {
    const dataSorted = data.sort((a, b) =>
      a.ItemName.toLowerCase() > b.ItemName.toLowerCase() ? 1 : -1
    );

    setData(dataSorted);
  });

  // this use effect is used to refresh the data when sorted
  useEffect(() => {
    setDataTorender(data);
    inventoryServices.getMenu()
    .then(data =>{
      setData(data)
    })
  }, [data, nameSorting, categorysorting, statusSorting]);

  const handleDelete = (id) => {
    const newData = data?.filter((item) => item.id !== id);
    setData(newData);
  };

  // search section

  // const SearchObject = () => {
  //   if (search === "") {
  //   } else {
  //     const SearchData = data.filter((items) => items.Name === search);
  //     setData(SearchData);
  //   }
  // };
  // SearchObject();

  // sorting by name section

  const SortByName = () => {
    if (nameSorting) {
      // decending
      const dataSorted = data.sort((a, b) =>
        a.ItemName.toLowerCase() > b.ItemName.toLowerCase() ? 1 : -1
      );
      setNameSorting(false);
      setData(dataSorted);
    } else {
      //  ascending
      const dataSorted = data.sort((a, b) =>
        a.ItemName.toLowerCase() < b.ItemName.toLowerCase() ? 1 : -1
      );
      setData(dataSorted);
    }
  };

  // sorting By status sections

  const SortByStatus = () => {
    if (statusSorting) {
      // decending
      const dataSorted = data.sort((a, b) =>
        a.Status.toLowerCase() > b.Status.toLowerCase() ? 1 : -1
      );
      setStatusSorting(false);
      setData(dataSorted);
    } else {
      //  ascending
      const dataSorted = data.sort((a, b) =>
        a.Status.toLowerCase() < b.Status.toLowerCase() ? 1 : -1
      );
      setData(dataSorted);
    }
  };

  // sorting by Category sections

  const SortByCategory = () => {
    if (categorysorting) {
      // decending
      const dataSorted = data.sort((a, b) =>
        a.MenuGroupName.toLowerCase() > b.MenuGroupName.toLowerCase() ? 1 : -1
      );
      setCategorySorting(false);
      setData(dataSorted);
    } else {
      //  ascending
      const dataSorted = data.sort((a, b) =>
        a.MenuGroupName.toLowerCase() < b.MenuGroupName.toLowerCase() ? 1 : -1
      );
      setData(dataSorted);
    }
  };

  return (
    <>
      {/* add and edit panel */}
      {(addProducts || editProduct) && (
        <AddProducts
          addProducts={addProducts}
          editProduct={editProduct}
          setAddProducts={setAddProducts}
          setEditProduct={setEditProduct}
          setMainPage={setMainPage}
          updatableProducts={updatableProducts}
        />
      )}

      {/* ends */}
      {mainpage && (
        <div className="menu__details">
          <div className="headder">
            <h2>MenuDetails</h2>
          </div>
          <div className="mid">
            <div
              className="add__product__wrapper"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setAddProducts(true);
                setMainPage(false);
              }}
            >
              <AddIcon />
              <h4>Add Product</h4>
            </div>

            <div className="searchWrapper">
              <input
                type="text"
                placeholder="Search.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon />
            </div>
          </div>

          <div className="bottom">
            <div className="table__sections">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>Image</th>
                    <th colSpan="2">
                      Name ascending{" "}
                      {!nameSorting ? (
                        <ArrowDropUpIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByName();
                            setNameSorting(true);
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByName();
                            setNameSorting(false);
                          }}
                        />
                      )}
                    </th>
                    <th>
                      Category
                      {!categorysorting ? (
                        <ArrowDropUpIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByCategory();
                            setCategorySorting(true);
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByCategory();
                            setCategorySorting(false);
                          }}
                        />
                      )}
                    </th>
                    <th>Price</th>
                    <th colspan="2">
                      Status
                      {!statusSorting ? (
                        <ArrowDropUpIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByStatus();
                            setStatusSorting(true);
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            SortByStatus();
                            setStatusSorting(false);
                          }}
                        />
                      )}
                    </th>
                    <th colSpan="2"></th>
                  </tr>
                </thead>
                <tbody>
                  {datatoRender
                    .filter((post) => {
                      if (search === "") {
                        return datatoRender;
                      } else if (
                        post.ItemName.toLowerCase().includes(
                          search.toLowerCase()
                        ) 
                        // ||
                        // post.Status.toLowerCase().includes(
                        //   search.toLowerCase()
                        // ) 
                        // ||
                        // post.MenuGroupName.toLowerCase().includes(
                        //   search.toLowerCase()
                        // )
                      ) {
                        return datatoRender;
                      }
                    })
                    .map((datas) => (
                      <tr
                        keys={datas.id}
                        className={clickedTr === datas.id && "selectedTr "}
                        onClick={() => SetClickedTr(datas.id)}
                      >
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="ImagettD" data-label="">
                          <img src={datas.Image} alt="" />
                        </td>

                        <td colSpan="2">{datas.ItemName}</td>

                        <td>{datas.CategoryName === null ? 'No Data in APi': datas.CategoryName}</td>

                        <td>{datas.ItemPrice}</td>

                        <td className="StatusSection" colSpan="2">
                          <div className="td__wrapper">
                            <div className="sections">
                              <h5>Active</h5>
                              <Checkbox
                                checked={datas.IsActive === true}
                                {...label}
                                color="success"
                              />
                            </div>
                            <div className="sections">
                              <h5>Block</h5>
                              <Checkbox
                                {...label}
                                checked={datas.IsActive === false}
                                sx={{
                                  color: red[800],
                                  "&.Mui-checked": {
                                    color: red[600],
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </td>

                        <td className="editDeleteSection" colSpan="2">
                          <div className="wrapper__section__edit__delete">
                            <div className="Sectionss">
                              <div
                                className="icon__box"
                                onClick={() => {
                                  setEditProduct(true);
                                  setMainPage(false);
                                  setUpdatableProducts(datas);
                                }}
                              >
                                <EditOutlinedIcon />
                              </div>
                              <h5>edit</h5>
                            </div>
                            <div className="Sectionss">
                              <div
                                className="icon__box"
                                onClick={() => handleDelete(datas.id)}
                              >
                                <DeleteIcon />
                              </div>
                              <h5>delete</h5>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuDetails;
