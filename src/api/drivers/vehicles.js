import axios from "axios";

export const vehicles = {
  getVehicles: (pageNumber) => {
    return axios.get('https://swapi.dev/api/vehicles/?page=' + pageNumber);
  },
  getVehicle: (id) => {
    return axios.get('https://swapi.dev/api/vehicles' + id);
  },
};

