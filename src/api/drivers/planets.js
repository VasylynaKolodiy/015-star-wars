import axios from "axios";

export const planets = {
  getPlanets:  ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/planets/?search=' + searchValue + '&page=' + pageNumber);
  },
  getPlanet: (id) => {
    return axios.get(' https://swapi.dev/api/planets/' + id);
  },
};

