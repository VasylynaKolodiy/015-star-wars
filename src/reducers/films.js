import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAIL, GET_FILM_REQUEST, GET_FILM_SUCCESS, GET_FILM_FAIL,
} from "../actions/films";

const initialState = {
  loading: false,
  films: {},
  film: {},
};

export default function films(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };

    case GET_FILMS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_FILM_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
        loading: false,
      };

    case GET_FILM_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
