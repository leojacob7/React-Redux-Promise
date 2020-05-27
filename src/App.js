import React, { Component } from 'react';
import store from './redux/store/store'
import { Provider } from 'react-redux';
import WidgetContainer from './components/WidgetContainer';
import './components/styles.scss';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="widgetContainer">
        <WidgetContainer />
      </div>
      </Provider>
    );
  }
}

export default App;