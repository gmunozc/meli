import * as React from 'react';
import {ErrorInfo} from "react";

import './breadcrumb.sass'
interface IStateType {
  error: Error | null;
}

interface IPropsType {
  text: string;
}

export default class Breadcrumb extends React.Component<IPropsType, IStateType> {

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

  public render(): React.ReactElement<IPropsType> {
    const {text} = this.props;
    return (
      <div className="breadcrumb">
        {text}
      </div>
    )
  }

  private search = (): void => {
    console.log('this.state', this.state);
  }
}

