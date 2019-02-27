import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'; //metoda potrzebna do stworzenia store / metoda do aplikowania roznych middleware
import rootReducer from './store/reducers/rootReducer'; //polaczone reducery za pomoca metody combineReducers
import { Provider } from 'react-redux'; //biblioteka potrzebna do polaczenia redux z reactem
import thunk from 'redux-thunk'; // redux middleware / do asynchronicznego wysylania danych
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebaseConfig),
        reduxFirestore(firebaseConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
