import {
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAIL,
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  GET_VEHICLE_FAIL,
} from "../actions/vehicles";

const initialState = {
  loading: false,
  vehicles: {},
  vehicle: {},
};

export default function vehicles(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICLES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        loading: false,
      };

    case GET_VEHICLES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_VEHICLE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicle: action.payload,
        loading: false,
      };

    case GET_VEHICLE_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
