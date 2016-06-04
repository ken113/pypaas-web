
import React, { PropTypes, Component } from 'react';
import classes from './style.scss';

export default class Feedback extends Component {

    render() {

        return (
            <div className={classes.feedback}>
                <h2>
                Your Feedback Keeps Us Going
                </h2>

                <ul className={classes.list}>
                	<li>
                        <p className={classes.content}>
                            I've tried a ton of task tracking apps, and I've never found one I could use on a daily basis, until I tried this.
                        </p>
                        <div className={classes.name}>
                            <img src="https://avatars1.githubusercontent.com/u/4915845?v=3&s=460" alt="Eric Sztanyo" />
                            <p>
                                Eric Sztanyo
                            </p>
                        </div>
                	</li>

                	<li>
                        <h3 className={classes.content}>
                            Just awesome!
                        </h3>
                        <div className={classes.name}>
                            <img src="https://avatars0.githubusercontent.com/u/1073082?v=3&s=460" alt="Andrew Thomas Carl" />
                            <p>
                                Andrew Thomas Carl
                            </p>
                        </div>
                	</li>

                	<li>
                        <p className={classes.content}>
                            I already used two other apps, Todoist and Toggl, but I have to say that yours is BY FAR the best one.
                        </p>
                        <div className={classes.name}>
                            <img src="https://avatars3.githubusercontent.com/u/1774898?v=3&s=460" alt="Joan Pont" />
                            <p>
                                Joan Pont
                            </p>
                        </div>
                	</li>
                </ul>

                <div className={[classes.heart, classes.x1].join(' ')}></div>
                <div className={[classes.heart, classes.x2].join(' ')}></div>
                <div className={[classes.heart, classes.x3].join(' ')}></div>
                <div className={[classes.heart, classes.x4].join(' ')}></div>
                <div className={[classes.heart, classes.x5].join(' ')}></div>
                <div className={[classes.altheart, classes.x6].join(' ')}></div>
            </div>
        );
    }
};
