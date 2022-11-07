import axios from "axios";

export const species = {
  getSpecies: (pageNumber) => {
    return axios.get(' https://swapi.dev/api/species/?page=' + pageNumber);
  },
  getSpecie: (id) => {
    return axios.get(' https://swapi.dev/api/species/' + id);
  },
};

