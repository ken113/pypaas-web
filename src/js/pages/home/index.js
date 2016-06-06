
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Helmet from 'react-helmet';
import { Banner, Partner } from './components';
import classes from './style.scss';
import SVG from 'svgjs';
import 'particles.js/particles.js';
import 'svg.filter.js';

export default class HomeContainer extends Component {

    createGategory(draw, points, image, className) {

        var triangle = draw.polygon(points).addClass(classes.categoryBg + ' ' + className);

        image.filter((add) => {
            add.componentTransfer({
                rgb: { type: 'linear', slope: 0.2 }
            });
        });

        triangle.fill(image);
    }

    addCatagories() {

        var draw = SVG(this.refs.categories).size('100%', '100%');
        var height = window.innerHeight;
        var width = window.innerWidth;
        var centered = [width/2, height/2];
        var g = draw.group();

        this.createGategory(
            draw,
            [
                [0,0],
                [width, 0],
                centered
            ],

            draw.image('images/government.jpg')
                .attr({
                'width': '100%',
                'height': '50%',
                'preserveAspectRatio': 'xMinYMid slice'
            }),

            'categories-government'
        );

        this.createGategory(
            draw,
            [
                [0,0],
                centered,
                [0, height]
            ],

            draw.image('images/Business-District-with-Modern-Skyscrapers-1024x768.jpg')
                .attr({
                'width': '50%',
                'height': '100%',
                'preserveAspectRatio': 'xMidYMin slice'
            }),

            'categories-enterprise'
        );

        this.createGategory(
            draw,
            [
                [0, height],
                centered,
                [width, height]
            ],

            draw.image('images/education.jpg')
                .attr({
                'width': '100%',
                'height': '50%',
                'preserveAspectRatio': 'xMidYMid slice'
            }),

            'categories-education'
        );

        this.createGategory(
            draw,
            [
                [width, 0],
                centered,
                [width, height]
            ],

            draw.image('images/invest-in-health.jpg')
                .attr({
                'width': '50%',
                'height': '100%',
                'preserveAspectRatio': 'xMidYMid slice'
            }),

            'categories-health'
        );
    }

    componentDidMount() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "triangle",
                    "stroke": {
                        "width": 0,
                        "color": "#000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.2,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 30,
                    "color": "#fff",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0.8,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        this.addCatagories();
        this.refs.container.classList.remove('md-loading-show');
    }

    render() {

        return (
            <section className={classes.container + ' md-loading md-loading-show'} ref="container">
                <Helmet title="首页 - PengYun Paas" />
                <Banner></Banner>
                <div className={classes.hero} id="particles-js">

                    <div className={classes.title}>
                    安全、稳定的云计算基础服务，海量的软件与服务助您上云更轻松，成熟的解决方案帮您快速应用云计算，满足更广泛业务需求的产品系列
                    </div>
                    <button className={classes.button + ' md-btn md-btn-coral md-btn-outline'}>
                        立即使用
                    </button>
                </div>
                <div className={classes.categories} ref="categories">

                    <div className={classes.categoryTitle + ' categories-government-title'}>
                        <h2>
                            政府服务
                        </h2>

                        <p>
                            Government Service
                        </p>
                    </div>

                    <div className={classes.categoryTitle + ' categories-enterprise-title'}>
                        <h2>
                            企业应用
                        </h2>

                        <p>
                            Enterprise Applications
                        </p>
                    </div>

                    <div className={classes.categoryTitle + ' categories-education-title'}>
                        <h2>
                            教育学习
                        </h2>

                        <p>
                            Education Learning
                        </p>
                    </div>

                    <div className={classes.categoryTitle + ' categories-health-title'}>
                        <h2>
                            健康医疗
                        </h2>

                        <p>
                            Health and medical
                        </p>
                    </div>
                </div>

                <Partner className={classes.partner}></Partner>
            </section>
        );
    }
}
