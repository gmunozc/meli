import * as React from 'react';
import {ErrorInfo, Fragment} from 'react';
import Application from "../../containers/application/Application";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {RouteComponentProps} from "react-router";
import {IReduxStore} from "../../reducers";
import {connect} from "react-redux";
import {ItemsReduxActions} from "../../actions/items.action";

import './items.sass';
import {itemGet, ItemReduxActions} from "../../actions/item.action";

interface IStateType {
  error: Error | null;
}

interface IPropsType extends IReduxStore, RouteComponentProps<{id: string}> {
  itemGet(id: string): ItemReduxActions;
  itemsSearch({redirect}: { redirect: boolean }): ItemsReduxActions;
  itemsChangeSearchText(searchText: string): ItemsReduxActions;
}

class ItemsDetailView extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public componentWillUnmount(): void {
    if (this.props.item.source) {
      this.props.item.source.cancel('Operation canceled by the user.');
    }
  }

  public componentDidMount(): void {
    const {item} = this.props.item;
    const {id} = this.props.match.params;
    if (!item || (item && item.id != id)) {
      const {id} = this.props.match.params;
      this.props.itemGet(id)
    }
  }

  public render(): React.ReactElement<IPropsType> {
    const {item} = this.props.item;
    const {id} = this.props.match.params;
    return (
      <Application {...this.props}>
        <div className="container">
          {
            item && item.id == id
              ?
              <Fragment>
                <Breadcrumb text={item.category}/>
                <div className="items-container">
                  <div className="row">
                    <div className="col-12 col-md-8">
                      <img
                        className="thumbnail detail pointer pb-2"
                        src={item.picture}
                        alt={item.title}
                      />
                      <h5>Descripción del producto</h5>
                      <p className="text-muted">
                        {
                          item.description
                            ? item.description.split('\n').map((item) =>
                              <Fragment>{item}<br/></Fragment>
                            )
                            : ''
                        }
                      </p>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                      <p className="text-muted">
                        {item.condition} - {item.sold_quantity} vendidos
                      </p>
                      <h5>{item.title}</h5>
                      <h1 className="mt-3">$ {this.formatNumber(item.price.amount)}
                        <small
                          className="decimal "
                        >
                          {
                            item.price.decimals ? item.price.decimals : '00'
                          }
                        </small>
                      </h1>
                      <button
                        type="button"
                        className="btn btn-primary btn-block mt-4  mb-4"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </Fragment>
              : null
          }
        </div>
      </Application>
    )
  }

  private formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

}

const mapStateToProps = (state: IReduxStore) => {
  return {
    ...state
  };
};

const mapDispatchToProps = ( dispatch: any) => {
  return {
    dispatch,
    itemGet: (id: string) => dispatch(itemGet(id)),
  };
};

export default connect<{}, {}, IPropsType, IReduxStore>(
  mapStateToProps, mapDispatchToProps
)(ItemsDetailView);

