import * as React from 'react';
import {ErrorInfo, Fragment} from 'react';
import Application from "../../containers/application/Application";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ItemsContainers from "./ItemsContainers";
import ItemPreview from "./ItemPreview";
import {RouteComponentProps} from "react-router";
import {IReduxStore} from "../../reducers";
import {connect} from "react-redux";
import {ItemsReduxActions} from "../../actions/items.action";

import './items.sass';
import {ItemReduxActions} from "../../actions/item.action";

interface IStateType {
  error: Error | null;
}

interface IPropsType extends IReduxStore, RouteComponentProps<{}> {
  itemGet(id: string): ItemReduxActions;
  itemsSearch(): ItemsReduxActions;
  itemsSearch({redirect}: { redirect: boolean }): ItemsReduxActions;
  itemsChangeSearchText(searchText: string): ItemsReduxActions;
}

class ItemsListView extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public componentDidMount(): void {
    document.title = `Mercado Libre`;
  }

  public render(): React.ReactElement<IPropsType> {
    const {items, router} = this.props;
    return (
      <Application {...this.props}>
        {
          router.location && router.location.search.length ?
            <div className="container">
              <Fragment>
                <Breadcrumb text={items.categories.length ? items.categories[0] : ''}/>
                <ItemsContainers>
                  {
                    items.items.map((item, index) => (
                      <ItemPreview key={index} itemDetail={item} {...this.props} />
                    ))
                  }
                </ItemsContainers>
              </Fragment>
            </div>
          : null
        }
      </Application>
    )
  }
}

const mapStateToProps = (state: IReduxStore) => {
  return {
    ...state
  };
};

const mapDispatchToProps = ( dispatch: any) => {
  return {
    dispatch
  };
};

export default connect<{}, {}, IPropsType, IReduxStore>(
  mapStateToProps, mapDispatchToProps
)(ItemsListView);

