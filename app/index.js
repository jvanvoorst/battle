const React = require('react');
const ReactDom = require('react-dom');

require('./index.css');

var App = require('./components/app');

ReactDom.render(
    <App />,
    document.getElementById('app')
);
