import {Dispatch} from "redux";
import {IReduxStore} from "../reducers";
import ApiService from '../services/api.service';
import Axios, {AxiosError, AxiosResponse, CancelTokenSource} from "axios";
import {history} from "../store/configureStore";
import {IItem} from "./items.action";


export interface IItemState {
  item: IItem | null;
  category: string;
  loading: boolean;
  source: CancelTokenSource | null;
}

interface IItemLoading {
  type: '@item/LOADING';
  payload: {
    loading: boolean;
  };
}

export function itemLoading(loading: boolean): IItemLoading {
  return {
    type: '@item/LOADING',
    payload: {
      loading
    }
  };
}


interface IItemCancelRequest {
  type: '@item/CANCEL_REQUEST';
  payload: {
    source: CancelTokenSource;
  };
}

export function itemCancelRequest(source: CancelTokenSource): IItemCancelRequest {
  return {
    type: '@item/CANCEL_REQUEST',
    payload: {
      source
    }
  };
}

interface IItemLoad {
  type: '@item/LOAD';
  payload: {
    item: IItem;
    category: string;
  };
}

export function itemLoad(item: IItem, category:string): IItemLoad {
  return {
    type: '@item/LOAD',
    payload: {
      item,
      category
    }
  };
}

export function itemGet(id: string, redirect?:boolean) {
  return (
    dispatch: Dispatch<ItemReduxActions>, getState: () => IReduxStore
  ) => {
    dispatch(itemLoading(true));
    dispatch(itemCancelRequest(ApiService.getSource()));
    ApiService
      .getItem(id)
      .then((response: AxiosResponse) => {
        const {item, category} = response.data;
        dispatch(itemLoad(item, category));
        if(item){
          document.title = `Mercado Libre | ${item.title}`;
        }
        dispatch(itemLoading(false));
        if (redirect) {
          history.push(`/items/${id}`);
        }
      })
      .catch((err: AxiosError) => {
        if (!Axios.isCancel(err)) {
          ApiService.errorHandler(err);
        }
        dispatch(itemLoading(false));
      })
  }
}



export type ItemReduxActions =
  IItemCancelRequest |
  IItemLoad |
  IItemLoading;