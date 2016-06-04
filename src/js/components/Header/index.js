
import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './style.scss';

export default class Header extends Component {

    render() {

        return (
            <div className={classes.header}>

                <div className="logo"></div>

                <a className="menu-item" href="">
                    <i className={classes.search + ' icon-search'}></i>
                </a>

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
