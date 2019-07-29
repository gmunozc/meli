import {IItemsState, ItemsReduxActions} from "../actions/items.action";

const urlParams = new URLSearchParams(window.location.search);
const searchText = urlParams.get('query');

const initialState: IItemsState = {
  categories: [],
  items: [],
  searchText: searchText ? searchText : '',
  loading: false,
  source: null
};

export default function itemsReducer(state = initialState, action: ItemsReduxActions): IItemsState {
  switch (action.type) {
    case '@items/LOADING':
      return {
        ...state,
        loading: action.payload.loading
      };
    case '@items/CANCEL_REQUEST':
      return {
        ...state,
        source: action.payload.source
      };
    case '@items/SEARCH':
      return {
        ...state,
        searchText: action.payload.searchText
      };
    case '@items/LOAD':
      return {
        ...state,
        items: action.payload.items,
        categories: action.payload.categories
      };
    default:
      return state;
  }
}