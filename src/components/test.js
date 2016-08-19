import React from 'react';

const Test = React.createClass({

	render: function() {
		return (
			<div id="container">
				<h2>副标题</h2>
				{this.props.children}
			</div>
		);
	}

});
export default Test;