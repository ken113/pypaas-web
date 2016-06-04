
import React, { PropTypes, Component } from 'react';
import classes from './style.scss';

export default class Footer extends Component {

    render() {

        return (
            <div className={classes.footer}>

                <ul className={classes.columns}>

                    <li className={classes.service}>
                        <strong>
                            服务与技术
                        </strong>

                        <p>
                            电话咨询：400-123-4567（5x8）
                        </p>

                        <p>
                            <a href="mailto:var.darling@gmail.com">邮件咨询：var.darling@gmail.com</a>
                        </p>

                        <p>
                            <a href="">联系客服</a>
                        </p>
                    </li>

                    <li className={classes.company}>
                        <strong>
                            公司信息
                        </strong>

                        <p>
                            <a href="">关于</a>
                        </p>

                        <p>
                            <a href="">工作机会</a>
                        </p>

                        <p>
                            <a href="">新闻</a>
                        </p>

                        <p>
                            <a href="">政策</a>
                        </p>

                        <p>
                            <a href="">条款与隐私</a>
                        </p>
                    </li>

                    <li className={classes.shortcuts}>
                        <strong>
                            快速入口
                        </strong>

                        <p>
                            <a href="">管理控制台</a>
                        </p>

                        <p>
                            <a href="">账号管理</a>
                        </p>
                    </li>

                    <li className={classes.others}>
                        <strong>
                            其他
                        </strong>

                        <p>
                            <a href="">客户案例</a>
                        </p>

                        <p>
                            <a href="">技术合作</a>
                        </p>
                    </li>

                </ul>

                <strong>
                    关注我们
                </strong>

                <div className={classes.social}>
                    <button className="md-btn md-btn-default md-btn-icon">
                        <i className="icon-twitter"></i>
                    </button>

                    <button className="md-btn md-btn-default md-btn-icon">
                        <i className="icon-sina-weibo"></i>
                    </button>
                </div>

                <p className={classes.copyright}>
                © 2015-2016 国家超级计算深圳中心（深圳云计算中心）版权所有
                </p>
            </div>
        );
    };
};
