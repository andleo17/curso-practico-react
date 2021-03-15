import * as React from 'react';

const terms = 'Términos de uso';
const privacityDeclarations = 'Declaración de privacidad';
const helpCenter = 'Centro de ayuda';

const Footer = () => (
  <footer className='footer'>
    <a href='/'>{terms}</a>
    <a href='/'>{privacityDeclarations}</a>
    <a href='/'>{helpCenter}</a>
  </footer>
);

export default Footer;
