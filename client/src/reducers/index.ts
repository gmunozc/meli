import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router';
import itemsReducer from './items.reducer';
import itemReducer from './item.reducer';
import {IItemsState} from "../actions/items.action";
import {RouterState} from "react-router-redux";
import {IItemState} from "../actions/item.action";


export interface IReduxStore {
  items: IItemsState;
  item: IItemState;
  router: RouterState;
}

export default (history: any) => combineReducers<IReduxStore>({
  items: itemsReducer,
  item: itemReducer,
  router: connectRouter(history)
});
