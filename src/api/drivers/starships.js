import axios from "axios";

export const starships = {
  getStarships: ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/starships/?search=' + searchValue + '&page=' + pageNumber);
  },
  getStarship: (id) => {
    return axios.get(' https://swapi.dev/api/starships/' + id);
  },
};

