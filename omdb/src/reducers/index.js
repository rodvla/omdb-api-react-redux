const initialState = {
    movies: [], //fav
    moviesLoaded: [], //todas las movies
    movieDetail: {}
  };

 export default function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.filter(m => m.id !== action.payload.id)
          }
    }
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: {...action.payload}
        };
    }
    if (action.type === "REMOVE_MOVIE_DETAIL") {
      return {
        ...state,
        movieDetail: {}
      };
    }
    return state;
}
  