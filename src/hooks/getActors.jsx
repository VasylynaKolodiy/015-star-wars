import axios from "axios";

export default class getActors {

  static async getAllActors(pageNumber) {
    const response = await axios.get(' https://swapi.dev/api/people/?page=' + pageNumber);
    return response;
  }
}

