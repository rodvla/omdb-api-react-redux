import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, removeMovieDetail } from '../../actions/index';
import './Movie.css';

export class Movie extends React.Component {
   componentDidMount(){
       this.props.getMovieDetail(this.props.match.params.id)
   }
   componentWillUnmount(){
     this.props.removeMovieDetail();
   }
    render() {
        return (
              <div className = 'movie' key={this.props.movieDetail.imdbID} >
                <br />
                <img src={this.props.movieDetail.Poster} />
                <div>
                <span> Título : {this.props.movieDetail.Title}</span>
                <br />
                <span> Tipo : {this.props.movieDetail.Type}</span>
                <br />
                <span> Sinopsis : {this.props.movieDetail.Plot}</span>
                <br />
                <span> Año : {this.props.movieDetail.Year}</span>
                <br />
                <span> Actores : {this.props.movieDetail.Actors}</span>
                <br />
                <span> País : {this.props.movieDetail.Country}</span>
                <br />
                <hr/>
                </div>
              </div>
        );
    }
}

// lo que me interesa del estado
function mapStateToProps(state) {
    return {
      movieDetail: state.movieDetail,
      };
  }
  // busco y despues puedo darle fav
  function mapDispatchToProps(dispatch) {
    return {
     getMovieDetail: id => dispatch(getMovieDetail(id)),
     removeMovieDetail: ()=>dispatch(removeMovieDetail())
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);


