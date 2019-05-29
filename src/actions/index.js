import axios from 'axios'
import { request, received, error } from '../shared/redux/baseActions'
import { API_URL } from '../config.js';
import {
  IS_LOADING,
  GET_ALUMNOS_CURSOS,
  GET_CURSOS,
  NEW_ALUMNO
} from '../action-types/index';

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function getAlumnosCursosAsync() {
  const axiosData = {
    method: 'GET',
    url: `${API_URL}/alumnos_cursos`,
    headers: {
      Accept: 'application/json'
    }
  }
  return (dispatch) => {
    setTimeout(() => {
      axios(axiosData).then(response =>{
        dispatch(received(GET_ALUMNOS_CURSOS, response))
        dispatch(isLoading(true))
      })
          .catch(err => {
            console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
          })
    }, 2000);
  }
}

export function getCursosAsync() {
  const axiosData = {
    method: 'GET',
    url: `${API_URL}/cursos`,
    headers: {
      Accept: 'application/json'
    }
  }
  return (dispatch) => {
    axios(axiosData).then(response =>{
      dispatch(received(GET_CURSOS, response))
    })
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
    })
  }
}