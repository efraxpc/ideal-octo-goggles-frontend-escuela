import React from 'react';
import Alumno from '../Alumno';
import './styles.css';

function Curso(props) {
  return (
      <div>
        {
          props.cursos.map((item) => {
            const alumnosPorCurso = props.alumnos_cursos.filter(card => card.curso === item.nombre);
            let alumnosPorCursoCount = alumnosPorCurso.length
            return (<section className="Categories">
                <div>
                    <h3>Curso de {item.nombre} <div> {alumnosPorCursoCount === 0 && <p className={'sinAlumnosLaravelMessageParagraph sinAlumnosParagraph'}>Sin alumnos inscritos :(. Correr <code className={'sinAlumnosLaravelMessageCodeParagraph'}>php artisan migrate:fresh --seed</code> en Laravel</p>}</div></h3>
                </div>
              <main className='grid'>
                {alumnosPorCursoCount!== 0 ? alumnosPorCurso.map(el => {
                  return (
                      <div>
                        <Alumno
                            alumnosPorCursoCount={alumnosPorCursoCount}
                            {...el}
                        />
                      </div>
                  )
                }):''}
              </main>
            </section>)

          })
        }
      </div>
  )
}

export default Curso
