import axios from "axios";

export const actors = {
  getActors: (pageNumber) => {
    return axios.get(' https://swapi.dev/api/people/?page=' + pageNumber);
  },
};

export const actor = {
  getActor: (id) => {
    return axios.get(' https://swapi.dev/api/people/' + id);
  },
};