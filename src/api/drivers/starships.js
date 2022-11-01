import axios from "axios";

export const starships = {
  getStarships: (pageNumber) => {
    return axios.get(' https://swapi.dev/api/starships/?page=' + pageNumber);
  },
  getStarship: (id) => {
    return axios.get(' https://swapi.dev/api/starships/' + id);
  },
};

