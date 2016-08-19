import Root from '../containers/Root'
const routes = {
	path: '/',
	component: Root,
	indexRoute: {
		component: Root
	},
	childRoutes: [{
		path: '/test',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('../components/test').default)
			})
		}
	}]
};

export default routes