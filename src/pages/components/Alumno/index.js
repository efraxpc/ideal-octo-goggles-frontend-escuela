import React from 'react';
import Avatar from 'react-avatar';
import './styles.css';

function Alumno(props) {
  return (
    <div>
      <article className={'avatarContainerWrapper'}>
        <div className={'avatarContainer'}>
          <Avatar name={props.nombres} size="150" textSizeRatio="1.75" />
        </div>
        <div className="text">
          <h4>{props.nombres} {props.apellidos}</h4>
          <span className={'avatarParagraph'}><p className={'avatarParagraphInner1'}>Edad </p> <p className={'avatarParagraphInner2'}>{props.edad}</p></span>
          <span className={'avatarParagraph'}><p className={'avatarParagraphInner1'}>Ciudad </p> <p className={'avatarParagraphInner2'}>{props.ciudad}</p></span>
          <p className={'avatarParagraphInner1'}>Dirección</p>
          <span className={'avatarParagraph'}><p className={'avatarAddresParagraph'}>{props.direccion}</p></span>
        </div>
      </article>
    </div>
  )
}

export default Alumno;
