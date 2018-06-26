import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';

class App extends React.Component {
  render() {
    return <MyComponent />;
  }
}

render(<App />, document.getElementById('root'));