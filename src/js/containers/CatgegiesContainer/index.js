
import React, { PropTypes, Component } from 'react';
import { Ads, AppList, Feedback } from 'components';
import { connect } from 'react-redux';
import * as categoriesActions from 'redux/modules/categories';
import Helmet from 'react-helmet';
import classes from './style.scss';
import Trianglify from 'trianglify';

@connect(state => ({
    apps: state.categories.apps,
    ads: state.categories.ads,
}), categoriesActions)
export default class CatgegiesContainer extends Component {

    getAppsBySortType(e) {

        Array.from(this.refs.sortTypes.children).forEach(item => {
            item.classList.remove(classes.active);
        });

        e.target.classList.add(classes.active);
        this.props.getApps(this.props.params.type, e.target.getAttribute('data-index'));
    }

    componentDidMount() {

        var canvas = this.refs.categoryType;
        var pattern = Trianglify({
            width: canvas.clientWidth,
            height: canvas.clientHeight,
        });

        canvas.appendChild(pattern.canvas());
    }

    render() {

        const { showPrev, showNext, getApps, getAds } = this.props;
        const types = ['government', 'enterprise', 'education', 'health'];
        var { type } = this.props.params;

        if (types.indexOf(type) === -1) {
            type = types[0];
        }

        return (
            <div>
                <Helmet title="应用分类 - PengYun Paas"></Helmet>
                <div className={classes.categories} ref="categories">

                    <div className={classes.categoryTypeWrapper}>
                        <div className={classes.categoryType} ref="categoryType">
                            <ul>
                                <li className={classes.government + ' ' + (type === 'government' && classes.active)}>
                                    <a href="/categories/government">
                                        <h3>政府服务</h3>
                                        <p>
                                            Government Service
                                        </p>
                                    </a>
                                </li>
                                <li className={classes.enterprise + ' ' + (type === 'enterprise' && classes.active)}>
                                    <a href="/categories/enterprise">
                                        <h3>企业应用</h3>
                                        <p>
                                            Enterprise Applications
                                        </p>
                                    </a>
                                </li>
                                <li className={classes.education + ' ' + (type === 'education' && classes.active)}>
                                    <a href="/categories/education">
                                        <h3>教育学习</h3>
                                        <p>
                                            Education Learning
                                        </p>
                                    </a>
                                </li>
                                <li className={classes.health + ' ' + (type === 'health' && classes.active)}>
                                    <a href="/categories/health">
                                        <h3>健康医疗</h3>
                                        <p>
                                            Health and medical
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Ads showNext={showNext} showPrev={showPrev} getAds={getAds} ads={{...this.props.ads, type}}></Ads>
                </div>

                <div className={classes.list}>
                    <ul className={classes.sortbar} ref="sortTypes">
                        <li data-index="pop" className={classes.active} onClick={this.getAppsBySortType.bind(this)}>
                            流行
                        </li>

                        <li data-index="week" onClick={this.getAppsBySortType.bind(this)}>
                            周排行
                        </li>

                        <li data-index="month" onClick={this.getAppsBySortType.bind(this)}>
                            月排行
                        </li>
                    </ul>

                    <AppList getApps={getApps} type={type} apps={this.props.apps}></AppList>
                </div>
                <Feedback></Feedback>
            </div>
        );
    }
};

