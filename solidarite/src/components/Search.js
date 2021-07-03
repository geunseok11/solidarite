import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-regular-svg-icons";
import loadSearchARequest from "../reducers/search";

const Search = (props) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadSearchARequest(title));
  // }, [title]);

  // function handleSearch(e) {
  //   setTitle(e);
  // }

  return (
    <div>
      <figure>
        {/* <FontAwesomeIcon icon={fa-Search} color={"#464e46"} size={25} /> */}
        <i class="fas fa-search"></i>
        <input
          placeholder="검색어를 입력해주세요"
          // onChange={handleSearch}
        ></input>
      </figure>
    </div>
  );
};

export default Search;
