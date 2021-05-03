import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';

const history = createBrowserHistory({ basename: process.env['PUBLIC_URL'] });

const routerReducer = connectRouter(history);
const routerMiddleware = createRouterMiddleware(history);

export { history, routerReducer, routerMiddleware };
