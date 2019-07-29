import * as React from 'react';
import {ErrorInfo} from 'react';
import {RouteComponentProps} from "react-router";
import {IItem} from "../../actions/items.action";

import './items.sass';
import {IReduxStore} from "../../reducers";
import {itemGet, ItemReduxActions} from "../../actions/item.action";
import {connect} from "react-redux";

interface IStateType {
  error: Error | null;
}

interface IPropsType extends RouteComponentProps<{}>, IReduxStore {
  itemGet(id: string, redirect: boolean): ItemReduxActions;
  itemDetail: IItem;
}

class ItemPreview extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public render(): React.ReactElement<IPropsType> {
    const {itemDetail} = this.props;
    return (
      <div className="item-preview">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-9">
            <div className="media">
              <img
                className="thumbnail pointer"
                src={itemDetail.picture}
                alt={itemDetail.title}
                onClick={this._handleGoToDetail}
              />
              <div className="media-body">
                <h5
                  onClick={this._handleGoToDetail}
                  className="mt-3 pointer"
                >$ {this.formatNumber(itemDetail.price.amount)} {
                  itemDetail.free_shipping
                    ? <i className="fa fa-certificate text-success"/>
                    : null
                } </h5>
                {itemDetail.title}
              </div>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block ">
            <p className="mt-4 text-muted text-location">{itemDetail.location}</p>
          </div>
        </div>
      </div>
    )
  }

  private _handleGoToDetail = () =>{
    const {itemDetail} = this.props;
    this.props.itemGet(itemDetail.id, true)
  };

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
    itemGet: (id: string, redirect: boolean) => dispatch(itemGet(id, redirect)),
  };
};

export default connect<{}, {}, IPropsType, IReduxStore>(
  mapStateToProps, mapDispatchToProps
)(ItemPreview);


