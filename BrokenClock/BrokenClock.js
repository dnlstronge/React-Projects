
//FIX THIS 

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    }
  render() {
    return <div></div>}
}

ReactDOM.render(<Clock />, document.getElementById('app'));