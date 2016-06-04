
import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { AppList } from 'components';
import * as detailAction from 'redux/modules/detail';
import classes from './style.scss';

@connect(state => ({
    apps: state.detail.apps
}), detailAction)
export default class DetailContainer extends Component {

    state = {
        app: {
            cover: '/images/twitter-header-photo-25.jpg',
            name: 'Undrtone',
            desc: 'Hooking into Spotify, SoundCloud, Rdio and Beats, Undrtone uses the world’s biggest cloud-based services to create a community around music. Undrtone’s a never-ending stream of songs curated for and by you – enabling you to discover and share tunes with your friends, as well as follow tastemakers and artists you love. ',
            icon: '/images/undrtone.svg',
            score: 8.7,
            star5: 16.0,
            star4: 39.2,
            star3: 37.0,
            star2: 6.3,
            star1: 1.5,

            showcase: [
                '/images/showcase1.png',
                '/images/showcase2.png',
                '/images/showcase3.png',
                '/images/showcase4.png',
            ]
        },

        recommend: [{
            name: 'Undrtone',
            desc: 'Hooking into Spotify, SoundCloud, Rdio and Beats, Undrtone uses the world’s biggest cloud-based services to create a community around music. Undrtone’s a never-ending stream of songs curated for and by you – enabling you to discover and share tunes with your friends, as well as follow tastemakers and artists you love. ',
            url: '/',
            icon: '/images/undrtone.svg',
        }, {
            name: 'TrackingTime | Time Tracker',
            icon: '/images/TrackingTime.png',
            url: '/',
            desc: 'A ton of new features and an all-new user experience. Meticulously designed to make every minute of your time count.'
        }, {
            name: 'Pixsta',
            desc: 'Pixsta is a free Instagram app that provides the best Instagram experience on the PC and Mac. In addition to all your favorite Instagram features including feeds, profile views, comments and ‘likes’, with Pixsta you can now search, share and download photos from Instagram directly on your computer.',
            url: '/',
            icon: '/images/pixsta.png',
        }, {
            name: 'Diaro - diary, journal, notes',
            icon: '/images/diaro.png',
            url: '/',
            desc: 'Diaro is available Online and for Android.  Keep your life moments privately!  Diaro is designed and focused to record activities, experiences, thoughts and ideas throughout your day and browse diary notes from the past in the easiest way.'
        }, {
            name: '90 s games',
            desc: `
            Best games collection from the 90 s:
            Pacman
            Mortal Kombat
            Street Fighter 2 Champion Edition
            Super Mario Flash
            Sonic
            Prince of Persia
            Donkey Kong
            Tank 1990
            Pong
            Bomberman
            Metal Slug
            Tetris
            Legend of Zelda
            and many other 90's games
            `,
            url: '/',
            icon: '/images/90game.png',
        }]
    };

    componentDidMount() {

        const { score } = this.state.app;
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
    }

    render() {

        const { app } = this.state;
        const style = {
            backgroundImage: 'url(' + app.cover + ')'
        };

        return (
            <div>
                <Helmet title="应用详情 - PengYun Paas"></Helmet>
                <div className={classes.hero} style={style}>

                    <div className={classes.info}>
                        <img src={app.icon} alt={app.name} />
                        <div className={classes.descWrapper}>
                            <h2>{app.name}</h2>
                            <p className={classes.desc}>{app.desc}</p>
                        </div>

                        <button className="md-btn md-btn-primary">部署应用</button>
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
                        app.showcase.map((item, index) => {

                            return (
                                <img src={item} key={index} />
                            );
                        })
                    }
                </div>

                <div className={classes.recommend}>

                    <h2>用户还喜欢以下应用</h2>

                    <AppList apps={this.props.apps} getApps={this.props.getApps}></AppList>
                </div>
            </div>
        );
    }
};
