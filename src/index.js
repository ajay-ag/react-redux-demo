import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/css/main.css'
import './assets/css/tailwind.css'
import { Provider } from 'react-redux';
import { store } from './redux/reducers';
import RouteList from "./routes/index";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouteList />
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
