import {ConnectedRouter} from 'connected-react-router';
import * as moment from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore, {history} from "./store/configureStore";
import {Route, RouteComponentProps, Switch} from 'react-router-dom';
import ItemsListView from "./components/items/ItemsListView";

const store = configureStore();

const NoMatch = ({location}: RouteComponentProps<{}>) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/items" component={ItemsListView}/>
        <Route component={NoMatch}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

moment.locale('es');
ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);
