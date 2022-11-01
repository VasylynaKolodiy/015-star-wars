import {
  GET_ACTORS_REQUEST,
  GET_ACTORS_SUCCESS,
  GET_ACTORS_FAIL, GET_ACTOR_REQUEST, GET_ACTOR_SUCCESS, GET_ACTOR_FAIL,
} from "../actions/actors";

const initialState = {
  loading: false,
  actors: {},
  actor: [],
};

export default function actors(state = initialState, action) {
  switch (action.type) {
    case GET_ACTORS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_ACTORS_SUCCESS:
      return {
        ...state,
        actors: action.payload,
        loading: false,
      };

    case GET_ACTORS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_ACTOR_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_ACTOR_SUCCESS:
      return {
        ...state,
        actor: action.payload,
        loading: false,
      };

    case GET_ACTOR_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
