
import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { AppList } from 'components';
import Hero from './components/Hero';
import * as detailAction from 'redux/modules/detail';
import classes from './style.scss';

@connect(state => ({
    apps: state.detail.apps,
    app: state.detail.app
}), detailAction)
export default class DetailContainer extends Component {

    render() {

        return (
            <div className={ this.props.app.loading && this.props.apps.loading && 'md-loading md-loading-show' }>
                <Helmet title="应用详情 - PengYun Paas"></Helmet>

                <Hero app={this.props.app.data} loading={this.props.app.loading} id={this.props.params.id} getDetail={this.props.getDetail}></Hero>

                <div className={classes.recommend}>

                    <h2>用户还喜欢以下应用</h2>

                    <AppList apps={this.props.apps} getApps={this.props.getApps}></AppList>
                </div>
            </div>
        );
    }
};
