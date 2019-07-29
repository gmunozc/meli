import * as React from 'react';
import {ErrorInfo, Fragment} from 'react';
import Header from "../header/Header";

import './application.sass';
import {RouteComponentProps} from "react-router";
import {ItemsReduxActions} from "../../actions/items.action";
import {IReduxStore} from "../../reducers";

interface IStateType {
  error: Error | null;
}

interface IPropsType extends IReduxStore, RouteComponentProps<{}> {
  itemsSearch({redirect}: { redirect: boolean }): ItemsReduxActions;
  itemsChangeSearchText(searchText: string): ItemsReduxActions;
}

export default class Application extends React.Component<IPropsType, IStateType> {

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public render(): React.ReactElement<IPropsType> {
    const {children} = this.props;
    return (
      <Fragment>
        <Header {...this.props} />
        {children}
      </Fragment>
    )
  }
}

