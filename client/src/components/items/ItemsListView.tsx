import * as React from 'react';
import './items.sass';

interface IStateType {
  error: Error | null;
}

interface IPropsType {

}

export default class ItemsListView extends React.Component<IPropsType, IStateType> {

  public render(): React.ReactElement<IPropsType> {
    return (
      <div/>
    )
  }
}
