import React, { Component } from 'react';
import Header from './Header';

export default class About extends Component {
    // state = {
    //     isRedirect: false
    // }
    handleClick = (value) => {
        this.props.history.push('/',value)
        // this.setState({ isRedirect: true })
    }
    render() {
        console.log(this.props, "chenna.")
        // let redirect = null
        // if (this.state.isRedirect) {
        //     redirect = <Redirect to="/" />
        // }
        return (
            <div>
                <Header />
                {/* {redirect} */}
                <h1>about</h1>
                <button onClick={()=>this.handleClick("yuva")}>Click</button>
            </div>
        );
    }
};




