var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<p>Hello World</p>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));