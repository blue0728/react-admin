import React from 'react';
import {
	Row,
	Col
} from 'antd';
const Root = React.createClass({

	render: function() {
		return (
			<div id="container">
				<Row>
					<h1>标题</h1>
					{this.props.children}
				</Row>
			</div>
		);
	}

});

export default Root;