import React, { useState, useContext } from "react";
import { RequestContext } from "../components/RequestContext";

export const Search = () => {
  const [searchFilter, setSearchFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const { request, setRequest } = useContext(RequestContext);

  const handleSearch = () => {

    setRequest((prevRequest) => ({
      ...prevRequest,
      Title: searchFilter === "title" ? searchValue : "",
      Description: searchFilter === "description" ? searchValue : "",
    }));
  };

  const handleDropdownChange = (e) => {
    setSearchFilter(e.target.value);
    setSearchValue("");
  };

  return (
    <div className="row mb-6">
      <div className="col 6">
        <select
          className="form-select"
          value={searchFilter}
          onChange={handleDropdownChange}
        >
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchFilter === "all" ? "" : searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchFilter === "all"}

        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
