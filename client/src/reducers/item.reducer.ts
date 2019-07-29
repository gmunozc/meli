import {IItemState, ItemReduxActions} from "../actions/item.action";

const initialState: IItemState = {
  item: null,
  category: '',
  loading: false,
  source: null
};

export default function itemReducer(state = initialState, action: ItemReduxActions): IItemState {
  switch (action.type) {
    case '@item/LOADING':
      return {
        ...state,
        loading: action.payload.loading
      };
    case '@item/CANCEL_REQUEST':
      return {
        ...state,
        source: action.payload.source
      };
    case '@item/LOAD':
      return {
        ...state,
        item: action.payload.item,
        category: action.payload.category || ''
      };
    default:
      return state;
  }
}