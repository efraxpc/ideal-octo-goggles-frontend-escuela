import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout';
import Curso from '../components/Curso';
import Related from '../components/Related';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
import './home.css';

class Home extends Component {
  async componentDidMount() {
    await this.props.actions.getCursosAsync()
    await this.props.actions.getAlumnosCursosAsync()
  }
  async componentWillMount() {
  }
  render() {
    return (
        <HomeLayout>
          <Related />
          {
            this.props.isLoading ? <Curso
            cursos={this.props.cursos}
            alumnos_cursos={this.props.alumnos_cursos}
            search={this.props.search}
            newAlumnoMethod={this.props.actions.newAlumnoAsync}
            /> : <div className='jqbox_innerhtml'><Loading/></div>
          }
        </HomeLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    isLoading: state.get('isLoading').get('active'),
    alumnos_cursos: state.get('data').get('alumnos_cursos'),
    cursos: state.get('data').get('cursos')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
