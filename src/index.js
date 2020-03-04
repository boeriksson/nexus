import ReactDom from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'
import Main from './Main'

const store = createStore(rootReducer, applyMiddleware(thunk));

const init = () => {
    ReactDom.render(
        <Provider store={store}>
            <Main/>
        </Provider>
        , document.getElementById('app'))
}

init()
