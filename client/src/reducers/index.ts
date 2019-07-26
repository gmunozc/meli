import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router';


export interface IReduxStore {

}

export default (history: any) => combineReducers<IReduxStore>({
  router: connectRouter(history)
});
