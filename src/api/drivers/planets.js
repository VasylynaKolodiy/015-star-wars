import axios from "axios";

export const planets = {
  getPlanets: (pageNumber) => {
    return axios.get(' https://swapi.dev/api/planets/?page=' + pageNumber);
  },
  getPlanet: (id) => {
    return axios.get(' https://swapi.dev/api/planets/' + id);
  },
};

