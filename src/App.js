import React, { Component } from 'react';
import store from './redux/store/store'
import { Provider } from 'react-redux';
import WidgetContainer from './components/WidgetContainer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
        <WidgetContainer />
      </div>
      </Provider>
    );
  }
}

export default App;