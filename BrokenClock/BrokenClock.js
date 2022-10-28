
//FIX THIS 


import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
   const oneSecond = 1000;
   setInterval(() => {
     this.setState({date: new Date()})
   }, oneSecond);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

/*problem: how will the clock stop??
 the timer could keep on ticking, trying to update
 a component which has gone running uneccessary JS
*/