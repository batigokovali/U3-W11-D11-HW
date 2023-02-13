import { ADD_TO_FAVORITES } from "../actions";
import { REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  favorites: {
    content: [],
  },
};

const FavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.favorites.content, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.favorites.content.filter(
          (el, i) => i !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default FavoritesReducer;