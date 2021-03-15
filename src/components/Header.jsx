import * as React from 'react';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img src={logo} alt='Logo' className='header__img' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Profile' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
