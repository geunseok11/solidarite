import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import loadSearchARequest from "../reducers/search";
import styled from "styled-components";

const SearchFigure = styled.figure`
  border: 2px solid;
  margin-bottom: 30px;

  width: 450px;
`;

const SearchInput = styled.input`
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;

  width: 400px;

  &:hover ${SearchFigure} {
    border-color: blue;
  }
`;

const SearchI = styled.i`
  border: none;
  margin-left: 10px;
`;

const Search = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  var searchAList = useSelector((state) => state.search?.searchAList);

  useEffect(() => {
    if (searchAList && searchAList.length > 0) {
      searchAList = [];
    }
  }, [searchAList]);

  const onClickSearch = useCallback(() => {
    dispatch(loadSearchARequest(value));
  }, [value]);

  const handleChange = (e) => {
    console.log("target value", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <SearchFigure onSubmit={onClickSearch}>
        <SearchI className="fas fa-search"></SearchI>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={handleChange}
        ></SearchInput>
      </SearchFigure>
    </div>
  );
};

export default Search;
