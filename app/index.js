import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Second from './components/Second.jsx'

//var App = require('./components/App.jsx');


var App2 = React.createClass({
  render: function() {
    return (
      <h1>hello2</h1>
    );
  }
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
