import axios from "axios";

export const characters = {
  getCharacters: ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/people/?search=' + searchValue + '&page=' + pageNumber);
  },
  getCharacter: (id) => {
    return axios.get('https://swapi.dev/api/people/' + id);
  },

};

