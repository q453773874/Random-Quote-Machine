import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Redux
// Action constants
const GET_QUOTE = 'GET_QUOTE'
// reducer
const defaultValue = [
    {
        content: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        author: "Danny"
    },
    {
        content: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        author: "Leonardo da Vinci"
    }
]
const quoteReducer = (state = { content: '', author: '' }, action) => {
    switch (action.type) {
        case GET_QUOTE:
            return defaultValue[Math.floor(Math.random() * defaultValue.length)]
        default:
            return state
    }
}

// store
const store = createStore(quoteReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
