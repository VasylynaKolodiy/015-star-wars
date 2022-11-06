import axios from "axios";

export const characters = {
  getCharacters: (pageNumber) => {
    return axios.get('https://swapi.dev/api/people/?page=' + pageNumber);
  },
  getCharacter: (id) => {
    return axios.get('https://swapi.dev/api/people/' + id);
  },
};

