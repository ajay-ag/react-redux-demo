//import libs
import React, { Component, Fragment } from 'react'
import Navigation from './Navigation';

class Public extends Component {
    render() {

        const { children } = this.props;

        return (
            <Fragment>
                <Navigation />
                <div className="container mx-auto px-6 pt-10">
                    <div className="box-border">
                        {children}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Public
