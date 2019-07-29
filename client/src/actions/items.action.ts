import {Dispatch} from "redux";
import * as NProgress from 'nprogress'
import {IReduxStore} from "../reducers";
import ApiService from '../services/api.service';
import Axios, {AxiosError, AxiosResponse, CancelTokenSource} from "axios";
import {history} from "../store/configureStore";

export interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  // only in search
  location?: string,
  // only in detail
  sold_quantity?: number,
  description?: string
  category: string
}

export interface IItemsState {
  categories: string[];
  items: Array<IItem>;
  searchText: string;
  loading: boolean;
  source: CancelTokenSource | null;
}

interface IItemsLoading {
  type: '@items/LOADING';
  payload: {
    loading: boolean;
  };
}

export function itemsLoading(loading: boolean): IItemsLoading {
  return {
    type: '@items/LOADING',
    payload: {
      loading
    }
  };
}


interface IItemsCancelRequest {
  type: '@items/CANCEL_REQUEST';
  payload: {
    source: CancelTokenSource;
  };
}

export function itemsCancelRequest(source: CancelTokenSource): IItemsCancelRequest {
  return {
    type: '@items/CANCEL_REQUEST',
    payload: {
      source
    }
  };
}

interface IItemsSearch {
  type: '@items/SEARCH';
  payload: {
    searchText: string;
  };
}

export function itemsChangeSearchText(searchText: string): IItemsSearch {
  return {
    type: '@items/SEARCH',
    payload: {
      searchText
    }
  };
}


interface IItemsLoad {
  type: '@items/LOAD';
  payload: {
    items: Array<IItem>;
    categories: string[];
  };
}

export function itemsLoad(items: Array<IItem>, categories: string[]): IItemsLoad {
  return {
    type: '@items/LOAD',
    payload: {
      items,
      categories
    }
  };
}

export function itemsSearch({redirect}: { redirect: boolean }) {
  return (
    dispatch: Dispatch<ItemsReduxActions>, getState: () => IReduxStore
  ) => {
    const state = getState();
    const {searchText} = state.items;
    if (searchText.length) {
      NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
      NProgress.start();
      document.title = `Mercado Libre | Buscando ${searchText}`;
      dispatch(itemsLoading(true));
      dispatch(itemsCancelRequest(ApiService.getSource()));
      ApiService
        .searchItems(searchText)
        .then((response: AxiosResponse) => {
          if (redirect) {
            history.push({
              pathname: '/items',
              search: `?query=${searchText}`,
            });
          }
          dispatch(itemsLoad(response.data.items, response.data.categories));
          NProgress.done();
          dispatch(itemsLoading(false));
        })
        .catch((err: AxiosError) => {
          if (!Axios.isCancel(err)) {
            ApiService.errorHandler(err);
          }
          NProgress.done();
          dispatch(itemsLoading(false));
        })
    }
  }
}


export type ItemsReduxActions =
  IItemsCancelRequest |
  IItemsSearch |
  IItemsLoad |
  IItemsLoading;