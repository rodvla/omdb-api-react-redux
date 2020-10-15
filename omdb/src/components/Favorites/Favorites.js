import React, { Component } from "react";
import { getMovieDetail, addMovieFavorite, removeMovieFavorite } from '../../actions/index';
import { connect } from "react-redux";
// import { removeArticle } from "../../actions/index";
import { NavLink } from 'react-router-dom';
import './Favorites.css';

export class Favorites extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* {console.log(this.props.movies)} */}
        <div className = 'movieContainer'>
          {this.props.movies && (this.props.movies.map ((movie,i) => 
          <div className = 'movies' key={i}>
             <div><img src={movie.poster} /></div>
             <div><NavLink to={`/movie/${movie.id}`}> {movie.title} </NavLink></div>
             <div><button onClick={() => this.props.removeMovieFavorite(movie)}> - Fav </button></div>
          </div>))}
        </div>        
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}
// busco y despues puedo darle fav
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);


