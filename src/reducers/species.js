import {
  GET_SPECIES_REQUEST,
  GET_SPECIES_SUCCESS,
  GET_SPECIES_FAIL, GET_SPECIE_REQUEST, GET_SPECIE_SUCCESS, GET_SPECIE_FAIL,
} from "../actions/species";

const initialState = {
  loading: false,
  species: {},
  specie: {},
};

export default function species(state = initialState, action) {
  switch (action.type) {
    case GET_SPECIES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.payload,
        loading: false,
      };

    case GET_SPECIES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_SPECIE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_SPECIE_SUCCESS:
      return {
        ...state,
        specie: action.payload,
        loading: false,
      };

    case GET_SPECIE_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
