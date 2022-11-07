import {
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAIL, GET_PLANET_REQUEST, GET_PLANET_SUCCESS, GET_PLANET_FAIL,
} from "../actions/planets";

const initialState = {
  loading: false,
  planets: {},
  planet: {},
};

export default function planets(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
        loading: false,
      };

    case GET_PLANETS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_PLANET_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_PLANET_SUCCESS:
      return {
        ...state,
        planet: action.payload,
        loading: false,
      };

    case GET_PLANET_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
