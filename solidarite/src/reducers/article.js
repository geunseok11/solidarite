export const initialState = {
  articleList: [],
};

export const LOAD_ARTICLE_REQUEST = "LOAD_ARTICLE_REQUEST";
export const LOAD_ARTICLE_SUCCESS = "LOAD_ARTICLE_SUCCESS";
export const LOAD_ARTICLE_FAILURE = "LOAD_ARTICLE_FAILURE";

export const loadArticleRequest = (data) => {
  return {
    type: LOAD_ARTICLE_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE_REQUEST:
      return {
        ...state,
        loadArticleLoading: true,
        loadArticleDone: false,
        loadArticleError: null,
      };
    case LOAD_ARTICLE_SUCCESS:
      return {
        ...state,
        loadArticleLoading: false,
        loadArticleDone: true,
        articleList: [action.data, ...state.articleList],
      };
    case LOAD_ARTICLE_FAILURE:
      return {
        ...state,
        loadArticleLoading: false,
        loadArticleError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
