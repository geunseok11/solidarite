export const initialState = {
  searchAList: [],
  searchBList: [],

  loadSearchALoading: false,
  loadSearchADone: false,
  loadSearchAError: null,

  loadSearchBLoading: false,
  loadSearchBDone: false,
  loadSearchBError: null,
};

export const LOAD_SEARCH_A_REQUEST = "LOAD_SEARCH_A_REQUEST";
export const LOAD_SEARCH_A_SUCCESS = "LOAD_SEARCH_A_SUCCESS";
export const LOAD_SEARCH_A_FAILURE = "LOAD_SEARCH_A_FAILURE";

export const LOAD_SEARCH_B_REQUEST = "LOAD_SEARCH_B_REQUEST";
export const LOAD_SEARCH_B_SUCCESS = "LOAD_SEARCH_B_SUCCESS";
export const LOAD_SEARCH_B_FAILURE = "LOAD_SEARCH_B_FAILURE";

export const loadSearchARequest = (data) => {
  return {
    type: LOAD_SEARCH_A_REQUEST,
    data,
  };
};

export const loadSearchBRequest = (data) => {
  return {
    type: LOAD_SEARCH_B_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH_A_REQUEST:
      return {
        ...state,
        loadSearchALoading: true,
        loadSearchADone: false,
        loadSearchAError: null,
      };
    case LOAD_SEARCH_A_SUCCESS:
      return {
        ...state,
        loadSearchALoading: false,
        loadSearchADone: true,
        searchAList: action.data,
      };
    case LOAD_SEARCH_A_FAILURE:
      return {
        ...state,
        loadSearchALoading: false,
        loadSearchAError: action.error,
      };

    case LOAD_SEARCH_B_REQUEST:
      return {
        ...state,
        loadSearchBLoading: true,
        loadSearchBDone: false,
        loadSearchBError: null,
      };
    case LOAD_SEARCH_B_SUCCESS:
      return {
        ...state,
        loadSearchBLoading: false,
        loadSearchBDone: true,
        searchBList: action.data,
      };
    case LOAD_SEARCH_B_FAILURE:
      return {
        ...state,
        loadSearchBLoading: false,
        loadSearchBError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
