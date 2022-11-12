import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAIL,
  GET_CHARACTER_REQUEST,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAIL,
  GET_CHARACTERS_SEARCH_REQUEST,
  GET_CHARACTERS_SEARCH_SUCCESS,
  GET_CHARACTERS_SEARCH_FAIL,
} from "../actions/characters";

const initialState = {
  loading: false,
  characters: {},
  character: {},
};

export default function characters(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };

    case GET_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };

    case GET_CHARACTER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_CHARACTERS_SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_CHARACTERS_SEARCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };

    case GET_CHARACTERS_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
      };


    default:
      return state;
  }
}
