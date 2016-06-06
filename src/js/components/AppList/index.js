
import React, { PropTypes, Component } from 'react';
import classes from './style.scss';

export default class AppList extends Component {

    static propTypes = {
        apps: PropTypes.shape({
            list: PropTypes.array.isRequired,
            loading: PropTypes.boolean
        }),
        type: PropTypes.string,
        getApps: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getApps(this.props.type || '');
    }

    render() {

        const { list = [], loading } = this.props.apps;

        return (
        <ul className={classes.list + ' md-loading ' + (loading && 'md-loading-show')} ref="container">
        {
            list.map((app, index) => {
                return (
                    <li key={index}>
                        <img src={app.icon} alt={app.name} />

                        <p className={classes.name}>
                            {app.name}
                        </p>

                        <p className={classes.desc}>
                            {app.desc}
                        </p>

                        <button className="md-btn md-btn-default md-btn-icon">
                            <a href="/detail/101012" className="icon-keyboard-arrow-right"></a>
                        </button>
                    </li>
                );
            })
        }
        </ul>
        );
    }
};
