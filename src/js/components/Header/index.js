
import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './style.scss';

export default class Header extends Component {

    render() {

        return (
            <div className={classes.header}>

                <div className="logo"></div>

                <div className="menu-item search">
                    <i className={classes.search + ' icon-search'}></i>

                    <div className="search-box">
                        <div className="search-input">
                            <i className="icon-search"></i>
                            <input type="text" placeholder="How can we help you?" />
                        </div>

                        <h3>
                            Suggested Articles
                        </h3>

                        <ul>
                        	<li>Getting Started Guide</li>
                        	<li>How to create a app</li>
                        </ul>
                    </div>
                </div>

                <a href="http://help.pengyun.gov.cn" className="menu-item">
                    开发者社区
                </a>

                <Link to="/categories" className="menu-item" activeClassName="menu-item-active">
                    应用分类
                </Link>

                <IndexLink to="/" className="menu-item" activeClassName="menu-item-active">
                    首页
                </IndexLink>
            </div>
        );
    }
};
