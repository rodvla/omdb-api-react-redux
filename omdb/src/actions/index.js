export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
export function getMovies(titulo) {
    return async function(dispatch) {
    return await fetch("http://www.omdbapi.com/?apikey=b45c98e4&s=" + titulo)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
  
  export function getMovieDetail(id) {
    return async function(dispatch) {
      return await fetch("http://www.omdbapi.com/?apikey=b45c98e4&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
  }

  export function removeMovieDetail(payload) {
    return { type: "REMOVE_MOVIE_DETAIL", payload };
  }