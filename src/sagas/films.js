import { call, put, all, takeLatest } from "redux-saga/effects";
import * as filmsActions from "../actions/films";
import {Api} from "../api";

function* getFilms(action) {
  try {
    const res = yield call(Api.films.getFilms, action.payload);
    yield put({type: filmsActions.GET_FILMS_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({ type: filmsActions.GET_FILMS_FAIL, payload: { error: err.message}});
  }
}

function* getFilm(action) {
  try {
    const res = yield call(Api.films.getFilm, action.payload);
    yield put({type: filmsActions.GET_FILM_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({ type: filmsActions.GET_FILM_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(filmsActions.GET_FILMS_REQUEST, getFilms),
  takeLatest(filmsActions.GET_FILM_REQUEST, getFilm),
])
