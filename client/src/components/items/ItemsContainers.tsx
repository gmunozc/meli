import * as React from 'react';
import {ErrorInfo} from 'react';

import './items.sass';

interface IStateType {
  error: Error | null;
}

interface IPropsType {}

export default class ItemsContainers extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public render(): React.ReactElement<IPropsType> {
    const {children} = this.props;
    return (
      <div className="items-container">
        {children}
      </div>
    )
  }
}
