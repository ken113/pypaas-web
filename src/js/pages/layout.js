
import React, { Component, PropTypes } from 'react';
import { Header, Footer } from 'components';

export default class Layout extends Component {

    static props = {
        children: PropTypes.element.isRequired
    };

    render() {

        return (
            <div>
                <Header></Header>

                <div className="AppContainer">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
};
