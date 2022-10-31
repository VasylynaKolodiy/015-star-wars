import {
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_FAIL, GET_STARSHIP_REQUEST, GET_STARSHIP_SUCCESS, GET_STARSHIP_FAIL,
} from "../actions/starships";

const initialState = {
  loading: false,
  starships: [],
  starship: [],
};

export default function starships(state = initialState, action) {
  switch (action.type) {
    case GET_STARSHIPS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: action.payload,
        loading: false,
      };

    case GET_STARSHIPS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_STARSHIP_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_STARSHIP_SUCCESS:
      return {
        ...state,
        starship: action.payload,
        loading: false,
      };

    case GET_STARSHIP_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
