import React from 'react';
import ChatList from 'components/ChatList.jsx';
import FirstPage from 'components/firstPage.jsx';
import CreateAccount from 'components/createAccount.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Main.css';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {grouplist} from 'states/group-reducers.js';
import {newAccount} from 'states/newAccount-reducers.js';
import {logIn} from 'states/logIn-reducers.js';

export default class Main extends React.Component {
    constructor(props) {

        super(props);



        this.store = null;
    }

    componentWillMount() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        this.store = createStore(combineReducers({
            grouplist,
            logIn,
            newAccount
        }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    }


    render() {
      return(
        <Provider store={this.store}>
        <Router>
        <div>
        <Route exact path="/" render={() => (
          <FirstPage/>
        )}/>
        <Route exact path="/CreateID" render={() => (
          <CreateAccount/>
        )}/>
        <Route exact path="/ChatList" render={() => (
          <ChatList/>
        )}/>
        </div>
        </Router>
        </Provider>
      );
    }
}
