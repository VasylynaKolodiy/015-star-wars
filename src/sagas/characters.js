import { call, put, all, takeLatest } from "redux-saga/effects";
import * as charactersActions from "../actions/characters";
import {Api} from "../api";

function* getCharacters(action) {
  try {
    const res = yield call(Api.characters.getCharacters, action.payload);
    yield put({type: charactersActions.GET_CHARACTERS_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: charactersActions.GET_CHARACTERS_FAIL, payload: { error: err.message } });
  }
}

function* getCharacter(action) {
  try {
    const res = yield call(Api.characters.getCharacter, action.payload);
    yield put({type: charactersActions.GET_CHARACTER_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: charactersActions.GET_CHARACTER_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(charactersActions.GET_CHARACTERS_REQUEST, getCharacters),
  takeLatest(charactersActions.GET_CHARACTER_REQUEST, getCharacter),
])
