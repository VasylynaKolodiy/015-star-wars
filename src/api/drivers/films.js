import axios from "axios";

export const films = {
  getFilms: (pageNumber) => {
    return axios.get(' https://swapi.dev/api/films/?page=' + pageNumber);
  },
  getFilm: (id) => {
    return axios.get(' https://swapi.dev/api/films/' + id);
  },
};

