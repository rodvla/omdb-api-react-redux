import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { getMovies,  addMovieFavorite } from "../../actions/index";

export class Buscador extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    //this.setState({title: " "})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador OMDB</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={ title }
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          <div className='movieContainer'>
         {this.props.movies && (this.props.movies.map ((movie,i) => 
         <div className='movies'key={i}>
           <div><img src={movie.Poster} /></div>       
           <div><NavLink to={`/movie/${movie.imdbID}`}> {movie.Title} </NavLink></div>
           <div><button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})}> + Fav </button></div>
        </div>
          ))}
          </div>
        </ul>
      </div>
    );
  }
}
// lo que me interesa del estado
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}
// busco y despues puedo darle fav
function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);


