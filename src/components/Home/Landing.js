import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Spinner from "../../components/layout/Spinner";
import MoviesContainer from "./MoviesContainer";
import { connect } from "react-redux";
class Landig extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <SearchForm />
        {this.props.loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps, null)(Landig);
