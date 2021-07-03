export const initialState = {
  articleAList: [],
  articleBList: [],

  loadArticleALoading: false,
  loadArticleADone: false,
  loadArticleAError: null,

  loadArticleBLoading: false,
  loadArticleBDone: false,
  loadArticleBError: null,
};

export const LOAD_ARTICLE_A_REQUEST = "LOAD_ARTICLE_A_REQUEST";
export const LOAD_ARTICLE_A_SUCCESS = "LOAD_ARTICLE_A_SUCCESS";
export const LOAD_ARTICLE_A_FAILURE = "LOAD_ARTICLE_A_FAILURE";

export const LOAD_ARTICLE_B_REQUEST = "LOAD_ARTICLE_B_REQUEST";
export const LOAD_ARTICLE_B_SUCCESS = "LOAD_ARTICLE_B_SUCCESS";
export const LOAD_ARTICLE_B_FAILURE = "LOAD_ARTICLE_B_FAILURE";

export const loadArticleARequest = (data) => {
  console.log("loadArticleARequest : ", data);
  return {
    type: LOAD_ARTICLE_A_REQUEST,
    data,
  };
};

export const loadArticleBRequest = (data) => {
  return {
    type: LOAD_ARTICLE_B_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE_A_REQUEST:
      console.log("article A request reducer : ", state, action);
      return {
        ...state,
        loadArticleALoading: true,
        loadArticleADone: false,
        loadArticleAError: null,
      };
    case LOAD_ARTICLE_A_SUCCESS:
      console.log("article A success reducer : ", action);
      return {
        ...state,
        loadArticleALoading: false,
        loadArticleADone: true,
        articleAList: [...state.articleAList, ...action.data],
      };
    case LOAD_ARTICLE_A_FAILURE:
      console.log("article A failure reducer : ", state, action);
      return {
        ...state,
        loadArticleALoading: false,
        loadArticleAError: action.error,
      };

    case LOAD_ARTICLE_B_REQUEST:
      return {
        ...state,
        loadArticleBLoading: true,
        loadArticleBDone: false,
        loadArticleBError: null,
      };
    case LOAD_ARTICLE_B_SUCCESS:
      return {
        ...state,
        loadArticleBLoading: false,
        loadArticleBDone: true,
        articleBList: action.data,
      };
    case LOAD_ARTICLE_B_FAILURE:
      return {
        ...state,
        loadArticleBLoading: false,
        loadArticleBError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
