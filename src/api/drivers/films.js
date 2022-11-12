import axios from "axios";

export const films = {
  getFilms: ({searchValue, pageNumber}) => {
    return axios.get('https://swapi.dev/api/films/?search=' + searchValue + '&page=' + pageNumber);
  },
  getFilm: (id) => {
    return axios.get(' https://swapi.dev/api/films/' + id);
  },
};

