import React from 'react';
const Root = React.createClass({

	render: function() {
		return (
			<div id="container">
				<h1>标题</h1>
				{this.props.children}
			</div>
		);
	}

});

export default Root;