import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Properties from './containers/properties';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact={true} path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/properties' component={Properties}/>
                </Switch>
            </React.Fragment>
        );
    }
};

export default App;
