import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	browserHistory
} from 'react-router';

import routes from './routes';

let rootDom = document.createElement('div');

rootDom.setAttribute('id', 'root-dom')

ReactDOM.render(
	<Router history={browserHistory}>{routes}</Router>,
	window.document.body.appendChild(rootDom)
);