import { fromJS } from 'immutable';
import { GET_ALUMNOS_CURSOS, GET_CURSOS } from '../action-types/index';

const initialState = fromJS({
  alumnos_cursos:[],
  cursos:[]
})

function data(state = initialState, action) {
  switch (action.type) {
    case GET_ALUMNOS_CURSOS: {
      return state.set('alumnos_cursos', action.payload.data)
    }
    case GET_CURSOS: {
      return state.set('cursos', action.payload.data)
    }
    default:
      return state
  }
}

export default data;