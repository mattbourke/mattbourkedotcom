// main.js
import React    from 'react';
import ReactDOM from 'react-dom';
import Footer   from './footer';
import Navbar   from './navbar';

var App = React.createClass({
  render: () => {
    return (
      <div>
          <Navbar/>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector(".body-container"));
ReactDOM.render(<Footer/>, document.querySelector(".footer"));
