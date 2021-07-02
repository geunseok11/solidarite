export const initialState = {
  searchList: [],
};

export const LOAD_SEARCH_REQUEST = "LOAD_SEARCH_REQUEST";
export const LOAD_SEARCH_SUCCESS = "LOAD_SEARCH_SUCCESS";
export const LOAD_SEARCH_FAILURE = "LOAD_SEARCH_FAILURE";

export const loadSearchRequest = (data) => {
  return {
    type: LOAD_SEARCH_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH_REQUEST:
      return {
        ...state,
        loadSearchLoading: true,
        loadSearchDone: false,
        loadSearchError: null,
      };
    case LOAD_SEARCH_SUCCESS:
      return {
        ...state,
        loadSearchLoading: false,
        loadSearchDone: true,
        searchList: [action.data, ...state.searchList],
      };
    case LOAD_ARTICLE_FAILURE:
      return {
        ...state,
        loadSearchLoading: false,
        loadSearchError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
