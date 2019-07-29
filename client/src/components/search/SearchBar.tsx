import * as React from 'react';
import {ErrorInfo} from 'react';
import {RouteComponentProps} from "react-router";
import './search.sass'
import {IReduxStore} from "../../reducers";
import {itemsChangeSearchText, ItemsReduxActions, itemsSearch} from "../../actions/items.action";
import {connect} from "react-redux";

interface IStateType {
  error: Error | null;
}

interface IPropsType extends IReduxStore ,RouteComponentProps<{}>{
  itemsSearch({redirect}: { redirect: boolean }): ItemsReduxActions;
  itemsChangeSearchText(searchText: string): ItemsReduxActions;
}

class SearchBar extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  constructor(props: IPropsType) {
    super(props);
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public componentDidMount(): void {
    if(!this.props.items.items.length){
      const searchText = this._getQuery(this.props.location.search);
      this.props.itemsChangeSearchText(searchText);
      this._submitSearch(false);
    }
  }

  public componentWillReceiveProps(nextProps: Readonly<IPropsType>, nextContext: any): void {
    const {props} = this;
    const searchText = this._getQuery(nextProps.location.search);
    if (!props.items.loading &&
      props.location.search !== nextProps.location.search
      && props.items.searchText !== searchText
    ){
      this.props.itemsChangeSearchText(searchText);
      this._submitSearch(false);
    }
  }

  public componentWillUnmount(): void {
    if (this.props.items.source) {
      this.props.items.source.cancel('Operation canceled by the user.');
    }
  }

  public render(): React.ReactElement<IPropsType> {
    const { searchText, loading } = this.props.items;
    return (
      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            value={searchText}
            className="form-control"
            placeholder="Nunca dejes de buscar"
            onChange={this._handleChangeSearch}
            onKeyDown={this._handleKeyDown}
          />
            <div className="input-group-append">
              <button
                className="btn btn-search"
                type="button"
                onClick={() => this._submitSearch(true)}
              >
                {
                  loading
                    ? <i className="fa fa-spin fa-spinner" />
                    : <i className="fa fa-search" />
                }
              </button>
            </div>
        </div>
      </div>
    )
  }

  private _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {searchText} = this.props.items;
    if (searchText.length && e.key === 'Enter') {
      this._submitSearch(true);
    }
  };

  private _handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
      this.props.itemsChangeSearchText(e.target.value)
  };

  private _submitSearch = (redirect: boolean): void => {
    this.props.itemsSearch({redirect});
  };

  private _getQuery = (params: string) => {
    const urlParams = new URLSearchParams(params);
    return urlParams.get('query') || '';
  };
}

const mapStateToProps = (state: IReduxStore) => {
  return {
    ...state
  };
};

const mapDispatchToProps = ( dispatch: any) => {
  return {
    itemsSearch: ({redirect}: { redirect: boolean }) => dispatch(itemsSearch({redirect})),
    itemsChangeSearchText: (searchText: string) => dispatch(itemsChangeSearchText(searchText)),
  };
};

export default connect<{}, {}, IPropsType, IReduxStore>(
  mapStateToProps, mapDispatchToProps
)(SearchBar);


