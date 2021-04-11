import axios from "axios";
export const searchMovie = text => dispatch => {
  dispatch({
    type: "SEARCH_MOVIE",
    payload: text,
  });
};

export const getMovies = text => dispatch => {
  // we can use async function because we use thunk
  axios
    .get(`https://www.omdbapi.com/?apikey=55dff2b4&s=${text}`)
    .then(response => {
      dispatch({
        type: "GET_MOVIES",
        payload: response.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
export const getMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=55dff2b4&i=${id}`)
    .then(response => {
      dispatch({
        type: "GET_MOVIE",
        payload: response.data,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
export const setLoading = () => dispatch => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
};

export const resetSearch = () => dispatch => {
  dispatch({
    type: "RESET",
    payload: "",
  });
};
