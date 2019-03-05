import React, { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Header/>
                <h1>home</h1>
                <h4>{this.props.location.state}</h4>
            </div>
        );
    }
};