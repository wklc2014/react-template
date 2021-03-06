import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import history from '../redux/history';
import route from '../route';
import DevTools from '../redux/store/DevTools.jsx';
import '../asset/scss/index.scss';

if (__DEV__) {
    require('../mock');
}

const oApp = document.getElementById('app');

const renderContent = (
    <Provider store={store}>
        <div className="full-screen">
            {route(history, store)}
            {__DEV__ ? <DevTools /> : null}
        </div>
    </Provider>
);

render(renderContent, oApp);
