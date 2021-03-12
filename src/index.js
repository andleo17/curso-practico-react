import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/styles/App.scss';
import HelloWorld from './components/HelloWorld';

const app = <HelloWorld />;

ReactDOM.render(app, document.getElementById('app'));
