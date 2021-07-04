export const initialState = {
  articleAList: [],
  articleBList: [],
  articleA: [],

  loadArticleALoading: false,
  loadArticleADone: false,
  loadArticleAError: null,

  loadArticleBLoading: false,
  loadArticleBDone: false,
  loadArticleBError: null,

  loadArticlePageALoading: false,
  loadArticlePageADone: false,
  loadArticlePageAError: null,
};

export const LOAD_ARTICLE_A_REQUEST = "LOAD_ARTICLE_A_REQUEST";
export const LOAD_ARTICLE_A_SUCCESS = "LOAD_ARTICLE_A_SUCCESS";
export const LOAD_ARTICLE_A_FAILURE = "LOAD_ARTICLE_A_FAILURE";

export const LOAD_ARTICLE_B_REQUEST = "LOAD_ARTICLE_B_REQUEST";
export const LOAD_ARTICLE_B_SUCCESS = "LOAD_ARTICLE_B_SUCCESS";
export const LOAD_ARTICLE_B_FAILURE = "LOAD_ARTICLE_B_FAILURE";

export const LOAD_ARTICLE_PAGE_A_REQUEST = "LOAD_ARTICLE_PAGE_A_REQUEST";
export const LOAD_ARTICLE_PAGE_A_SUCCESS = "LOAD_ARTICLE_PAGE_A_SUCCESS";
export const LOAD_ARTICLE_PAGE_A_FAILURE = "LOAD_ARTICLE_PAGE_A_FAILURE";

export const loadArticleARequest = (data) => {
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

export const loadArticlePageARequest = (data) => {
  return {
    type: LOAD_ARTICLE_PAGE_A_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE_A_REQUEST:
      return {
        ...state,
        loadArticleALoading: true,
        loadArticleADone: false,
        loadArticleAError: null,
      };
    case LOAD_ARTICLE_A_SUCCESS:
      return {
        ...state,
        loadArticleALoading: false,
        loadArticleADone: true,
        articleAList: [...state.articleAList, ...action.data],
      };
    case LOAD_ARTICLE_A_FAILURE:
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
        articleBList: [...state.articleBList, ...action.data],
      };
    case LOAD_ARTICLE_B_FAILURE:
      return {
        ...state,
        loadArticleBLoading: false,
        loadArticleBError: action.error,
      };

    case LOAD_ARTICLE_PAGE_A_REQUEST:
      return {
        ...state,
        loadArticlePageALoading: true,
        loadArticlePAgeADone: false,
        loadArticlePageAError: null,
      };
    case LOAD_ARTICLE_PAGE_A_SUCCESS:
      return {
        ...state,
        loadArticlePageALoading: false,
        loadArticlePageADone: true,
        articleA: [...state.articleA, ...action.data],
      };
    case LOAD_ARTICLE_PAGE_A_FAILURE:
      return {
        ...state,
        loadArticlePageALoading: false,
        loadArticlePageAError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
