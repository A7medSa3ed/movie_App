import React, { Component } from "react";

import { connect } from "react-redux";

import MovieCard from "./MovieCard";

class MoviesContainer extends Component {
  render() {
    return (
      <div className="row">
        {this.props.movies.Response === "True" ? (
          this.props.movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <h1 style={{ margin: "auto " }}>{this.props.movies.Error}</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  null
)(MoviesContainer);
