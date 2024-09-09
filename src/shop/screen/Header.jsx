import React from 'react';
import { Link } from 'react-router-dom';



export default function Header({back}) {
  return (
    <header>
      <div className='logo'>
        <b>My Demo </b>
        App
        </div>
      {back && <Link className='back' to={back}>
      <img src="/img/arrow-left.svg" alt="arrow" />
      </Link>}
    </header>
  );
}


