import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (__DEV__) {
    const reduxLogger = require('redux-logger');
    const logger = reduxLogger.createLogger({
        level: 'info',
        collapsed: true
    });
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
