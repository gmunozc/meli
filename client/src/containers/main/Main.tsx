import * as React from "react";
import {ErrorInfo} from "react";

import '../header/header.sass'

interface IStateType {
  error: Error | null;
}

interface IPropsType {}

export default class Main extends React.Component<IPropsType, IStateType> {

  readonly state = {
    error: null
  };

  static propTypes = {};

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({error});
  }

  public render(): React.ReactElement<IPropsType> {
    return (
      <div className="container">
        
      </div>
    )
  }
}


