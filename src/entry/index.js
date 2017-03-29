import React from 'react';
import { render } from 'react-dom';
import App from '../component/App.jsx';
import '../asset/scss/index.scss';

const oApp = document.getElementById('app');

render(<App />, oApp);
