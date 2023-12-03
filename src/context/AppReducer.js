const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "ADD_MOVIE_TO_WATCHEDLIST":
      return {
        ...state,
        watchedlist: [...state.watchedlist, action.payload],
      };
    case "DELETE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter((movie) => movie.id != action.payload.id),
        ],
      };
    case "DELETE_MOVIE_FROM_WATCHEDLIST":
      return {
        ...state,
        watchedlist: [
          ...state.watchedlist.filter((movie) => movie.id != action.payload.id),
        ],
      };
    case "SORT_ASC_WATCHLIST": {
      const sortedList = [...state.watchlist];
      sortedList.sort((a, b) => a.vote_average - b.vote_average);
      return {
        ...state,
        watchlist: sortedList,
      };
    }
    case "SORT_DESC_WATCHLIST": {
      return {
        ...state,
        watchlist: [
          ...state.watchlist.sort((a, b) => b.vote_average - a.vote_average),
        ],
      };
    }
    case "SORT_ASC_WATCHEDLIST": {
      return {
        ...state,
        watchedlist: [
          ...state.watchedlist.sort((a, b) => a.vote_average - b.vote_average),
        ],
      };
    }
    case "SORT_DESC_WATCHEDLIST": {
      return {
        ...state,
        watchedlist: [
          ...state.watchedlist.sort((a, b) => b.vote_average - a.vote_average),
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
