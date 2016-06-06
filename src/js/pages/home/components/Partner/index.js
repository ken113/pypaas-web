
import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import classes from './style.scss';

export default class Partner extends Component {

    componentDidMount() {

        var backgrounds = findDOMNode(this.refs.backgrounds).childNodes;
        var current = Array.from(backgrounds).find((item) => {
            if (item.classList.contains(classes.active) !== -1) {
                return true;
            }
        });

        setInterval(() => {

            var next = current.nextSibling || backgrounds[0];

            current.classList.remove(classes.active);
            next.classList.add(classes.active);

            current = next;
        }, 5000);
    }

    render() {

        return (
            <div className={classes.hero}>
                <ul className={classes.background} ref="backgrounds">
                    <li className={classes.active}>
                        <img src="images/lake-tahoe.jpg" />
                    </li>

                    <li>
                        <img src="images/seoul.jpg" />
                    </li>

                    <li>
                        <img src="images/rome.jpg" />
                    </li>

                    <li>
                        <img src="images/bondi-beach.jpg" />
                    </li>
                </ul>

                <h3 className={classes.title}>
                    <p>合作伙伴</p>
                    与合作伙伴共同打造云计算生态系统
                </h3>

                <div className={classes.logo}>
                    <p>
                        <img src="images/mailchimp.png" width="160" />
                        <img src="images/paypal.png" width="125" />
                        <img src="images/etsy.png" width="75" />
                        <img src="images/google.png" width="158" />
                        <img src="images/dena.png" width="75"/>
                        <img src="images/vimeo.png" width="120" />
                    </p>

                    <p>
                        <img src="images/nasa.png" width="48"/>
                        <img src="images/banksimple.png" width="139"/>
                        <img src="images/blizzard.png" width="90" />
                        <img src="images/uofminnesota.png" width="100"/>
                        <img src="images/gree.png" width="105" />
                    </p>
                </div>

                <button className={classes.more + ' md-btn md-btn-primary'}>
                    更多合作伙伴
                </button>
            </div>
        );
    }
};
