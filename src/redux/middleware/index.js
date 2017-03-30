import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const defMiddleware = store => next => action => {
    // console.log('dispatching', action)
    let result = next(action)
    // console.log('next state', store.getState())
    return result
}

middlewares.push(defMiddleware);

if (__DEV__) {
    const createLogger = require('redux-logger');
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
