
import React, { Component, PropTypes } from 'react';
import classes from './style.scss';

export default class Banner extends Component {

    static propTypes = {
        items: PropTypes.array
    };

    static timer;

    state = {

        items: [{
            src: 'images/banner-1.png',
            alt: 'test1'
        }, {
            src: 'images/banner-2.png',
            alt: 'test2'
        }]
    };

    showBanner(next) {

        var banners = this.refs.banners.childNodes;
        var current = Array.from(banners).find((item) => item.classList.contains(classes.active));

        next = next || current.nextSibling || banners[0];

        current.classList.remove(classes.active);
        next.classList.add(classes.active);
        this.loopBanner();
    }

    showNext() {
        this.showBanner();
    }

    showPrev() {

        var banners = this.refs.banners.childNodes;
        var active = Array.from(banners).find((item) => item.classList.contains(classes.active));

        this.showBanner(active.previousSibling || banners[banners.length - 1]);
    }

    loopBanner() {

        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.showBanner(), 8000);
    }

    componentDidMount() {
        this.loopBanner();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        const { items } = this.state;

        return (

            <div className={classes.banner}>

                <div className={classes.prev} onClick={this.showPrev.bind(this)}></div>
                <div className={classes.next} onClick={this.showNext.bind(this)}></div>

                <div className={classes.viewport} ref="banners">

                    <div className={[classes.item, classes.active].join(' ')} data-index="banner-1">
                        <div className={[classes.bg, classes.price].join(' ')}></div>
                        <articel>
                            <figure>
                                <img src="images/banner-1-price.png" />
                            </figure>
                            <figcaption>
                                <button className="md-btn md-btn-default">
                                    立即抢购
                                </button>
                            </figcaption>
                        </articel>
                    </div>

                    <div className={classes.item} data-index="banner-2">
                        <div className={[classes.bg, classes.warehousing].join(' ')}></div>
                        <articel>
                            <p>
                            Data Warehousing on AWS
                            </p>

                            <p>
                            在 AWS 上构建快速而又经济有效的企业数据仓库
                            </p>

                            <a href="" className="md-link">了解关于 Data Warehousing 的更多信息</a>
                        </articel>
                    </div>

                    <div className={classes.item} data-index="banner-3">
                        <div className={[classes.bg, classes.quality].join(' ')}></div>
                        <articel>
                            <h2>
                            云上高质量软件交付
                            </h2>

                            <p>
                            持续交付的道与术
                            </p>

                            <button className="md-btn md-btn-primary">
                            马上报名
                            </button>
                        </articel>
                    </div>
                </div>
            </div>
        );
    };
}

