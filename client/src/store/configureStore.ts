import { routerMiddleware } from 'connected-react-router';
import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers'
import createDebounce from 'redux-debounced';
import ThunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import browserHistort from "../utils/history";

export const history = browserHistort;

const configureStore = () => {
  let enhancers: any;
  const middlewares: any[] = [routerMiddleware(history)];

  middlewares.push(createDebounce());
  middlewares.push(ThunkMiddleware);
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 10 });
    enhancers = composeEnhancers(applyMiddleware(...middlewares));
  } else {
    enhancers = applyMiddleware(...middlewares);
  }
  return createStore(reducers(history), enhancers);
};

export default configureStore;
