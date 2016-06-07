
import React, { PropTypes, Component } from 'react';
import classes from './style.scss';

export default class Hero extends Component {

    static propTypes = {
        app: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        getDetail: PropTypes.func.isRequired
    };

    componentDidMount() {

        this.props.getDetail(this.props.id).then(() => {

            const { score } = this.props.app;
            const stars = this.refs.rate.childNodes;
            const count = Math.floor(score/2);
            const width = (score/2 - count).toFixed(2) * 100;

            for (var i = 0; i <= count; ++i) {
                stars[i].classList.add('md-rate-selected');
            }

            if (count < 5) {
                stars[count].children[0].style.width = `${width}%`;
            }

            Array.from(this.refs.percent.querySelectorAll('[data-percent]')).map((item) => {
                item.style.width = item.getAttribute('data-percent') + '%';
            });
        });
    }

    render() {

        const { app, loading }  = this.props;
        const style = {
            backgroundImage: 'url(' + app.cover + ')'
        };


        return (
            <div>
                <div className={classes.hero} style={style}>

                    <div className={classes.info}>
                        <img src={app.icon} alt={app.name} />
                        <div className={classes.descWrapper}>
                            <h2>{app.name}</h2>
                            <p className={classes.desc}>{app.desc}</p>
                        </div>

                        {
                            app.installed
                                ? <button className="md-btn md-btn-primary">查看详情</button>
                                : <button className="md-btn md-btn-primary">部署应用</button>
                        }
                    </div>

                    <div className={classes.rate}>
                        <div className={classes.scoreWrapper}>
                            <h1 className={classes.score}>{app.score}</h1>
                            <div className="md-rate" ref="rate">
                                <span> <i></i> </span>
                                <span> <i></i> </span>
                                <span> <i></i> </span>
                                <span> <i></i> </span>
                                <span> <i></i> </span>
                            </div>
                        </div>

                        <ul className={classes.percent} ref="percent">
                            <li>
                                5 星 <span data-percent={app.star5}></span>{app.star5}%
                            </li>

                            <li>
                                4 星 <span data-percent={app.star4}></span>{app.star4}%
                            </li>

                            <li>
                                3 星 <span data-percent={app.star3}></span>{app.star3}%
                            </li>

                            <li>
                                2 星 <span data-percent={app.star2}></span>{app.star2}%
                            </li>

                            <li>
                                1 星 <span data-percent={app.star1}></span>{app.star1}%
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes.showcase}>
                    {
                        (app.showcase || []).map((item, index) => {

                            return (
                                <img src={item} key={index} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};
