
import React, { PropTypes, Component } from 'react';
import classes from './style.scss';

export default class Ads extends Component {

    static timer;

    static propTypes = {
        ads: PropTypes.shape({
            type: PropTypes.string.isRequired,
            list: PropTypes.array.isRequired,
            index: PropTypes.number.isRequired,
        }),
        showPrev: PropTypes.func.isRequired,
        showNext: PropTypes.func.isRequired,
        getAds: PropTypes.func.isRequired,
    };

    showAd() {

        var ads = this.refs.ads.childNodes;
        var current = Array.from(ads).find((item) => item.classList.contains(classes.active));
        var next = ads[this.props.ads.index - 1];

        current.classList.remove(classes.active);
        next.classList.add(classes.active);

        this.loopAd();
    }

    showNext() {
        this.props.showNext();
        setTimeout(this.showAd.bind(this));
    }

    showPrev() {
        this.props.showPrev();
        setTimeout(this.showAd.bind(this));
    }

    loopAd() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.props.showNext();
            this.showAd();
        }, 5000);
    }

    componentDidMount() {

        this.props.getAds(this.props.ads.type).then(() => {
            this.refs.ads.classList.remove('md-loading-show');
            this.loopAd();
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        const { list, index } = this.props.ads;

        return (
            <div className={classes.ads}>

                <div className={classes.viewport + ' md-loading md-loading-show'} ref="ads">

                    {
                        list.map((ad, index) => {

                            const styles = {
                                backgroundImage: 'url(' + ad.cover + ')'
                            };

                            return (
                                <div className={classes.ad + ' ' + (index === 0 ? classes.active : '')} style={styles} key={index} data-index={index + 1}>
                                    <div className={classes.icon}>
                                        <img src={ad.icon} alt={ad.name} />
                                    </div>
                                    <div className={classes.info}>
                                        <h2>
                                            {ad.name}
                                        </h2>

                                        <p>
                                            {ad.desc}
                                        </p>

                                        <a className="md-link" href={'/detail/' + ad.url}>
                                            查看更多 &gt;&gt;
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

                <div className={classes.controllers}>
                    <i className="icon-arrow-upward" onClick={this.showPrev.bind(this)}></i>
                    <p>
                       <span className={classes.current}>{index}</span>
                       /
                       <span className={classes.total}>{list.length}</span>
                    </p>
                    <i className="icon-arrow-downward" onClick={this.showNext.bind(this)}></i>
                </div>

            </div>
        );
    }
};
