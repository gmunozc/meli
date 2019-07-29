import * as React from "react";
import SearchBar from "../../components/search/SearchBar";

import './header.sass'
import {ErrorInfo} from "react";
import {RouteComponentProps} from "react-router";
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

class Header extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public render(): React.ReactElement<IPropsType> {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-2 col-sm-2 col-md-1 col-lg-1 logo">
              <img
                className="pointer"
                src="/static/images/logo.png"
                alt="logo mercado libre"
                onClick={this.goHome}
              />
            </div>
            <div className="col-10 col-sm-10 col-md-11 col-lg-11">
              <SearchBar {...this.props}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private goHome = () => {
    this.props.itemsChangeSearchText('');
    this.props.history.push('/')
  }
}



const mapStateToProps = (state: IReduxStore) => {
  return {
    ...state
  };
};

const mapDispatchToProps = ( dispatch: any) => {
  return {
    itemsChangeSearchText: (searchText: string) => dispatch(itemsChangeSearchText(searchText)),
  };
};

export default connect<{}, {}, IPropsType, IReduxStore>(
  mapStateToProps, mapDispatchToProps
)(Header);

