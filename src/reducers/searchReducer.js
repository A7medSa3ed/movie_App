const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "RESET":
      return {
        ...state,
        text: action.payload,
        movies: [],
      };
    default:
      return state;
  }
}
