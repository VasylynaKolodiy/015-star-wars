import axios from "axios";

export const vehicles = {
  getVehicles: ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/vehicles/?search=' + searchValue + '&page=' + pageNumber);
  },
  getVehicle: (id) => {
    return axios.get('https://swapi.dev/api/vehicles/' + id);
  },
};

