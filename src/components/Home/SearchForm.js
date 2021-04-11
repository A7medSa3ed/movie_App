import React, { Component, createRef } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import {
  searchMovie,
  getMovies,
  setLoading,
  resetSearch,
} from "../../actions/searchActions";
class SearchForm extends Component {
  state = {};

  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = e => {
    this.props.searchMovie(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.handleSubmit}>
            <input
              ref={this.inputRef}
              type="text"
              className="form-control"
              value={this.props.text}
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text,
});

// include action inside this folder--->
/*
//
// const mapDispatchToprops = dispatch => {
//   return {
//     searchMovie: text => dispatch({ type: "SEARCH_MOVIE", payload: text }),
//     getMovies: text =>
//       axios
//         .get(`http://www.omdbapi.com/?apikey=55dff2b4&s=${text}`)
//         .then(response => {
//           dispatch({
//             type: "GET_MOVIES",
//             payload: response.data.Search
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         })
//   };
// };
*/
export default connect(
  mapStateToProps,
  // mapDispatchToprops --> this call action that included in this file
  { searchMovie, getMovies, setLoading, resetSearch } // call actions from another folder
)(SearchForm);
