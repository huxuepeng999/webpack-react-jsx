import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello World</div>;
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));