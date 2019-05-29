import React from 'react';
import './styles.css';

function HomeLayout(props) {
  return (
    <section >
      {props.children}
    </section>
  )
}

export default HomeLayout
