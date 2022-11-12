import axios from "axios";

export const species = {
  getSpecies: ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/species/?search=' + searchValue + '&page=' + pageNumber);
  },
  getSpecie: (id) => {
    return axios.get(' https://swapi.dev/api/species/' + id);
  },
};

