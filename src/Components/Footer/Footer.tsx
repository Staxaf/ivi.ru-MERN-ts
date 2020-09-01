import React from 'react'
import css from './Footer.module.scss'
import {NavLink} from "react-router-dom";

const Footer: React.FC = () => (
    <div className={css.footer}>
        <div className={css.footer__navs}>
            <div className={css.footer__container}>
                <div className={css.footer__nav}>
                    <h5 className={css.footer__nav_title}>Sections</h5>
                    <ul className={css.footer__nav_list}>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/films'}>Films</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/serials'}>Serials</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/cartoons'}>Cartoons</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Collections</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={css.footer__nav}>
                    <h5 className={css.footer__nav_title}>Devices</h5>
                    <ul className={css.footer__nav_list}>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Android</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>iPhone/iPad/iPod</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>LG Smart TV</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Samsung Smart TV</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Apple TV</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Toshiba Smart TV</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Philips Smart TV</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={css.footer__nav}>
                    <h5 className={css.footer__nav_title}>About us</h5>
                    <ul className={css.footer__nav_list}>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>About company</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Privacy Policy</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Advertising Placement</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Vacancies</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={css.footer__nav}>
                    <h5 className={css.footer__nav_title}>Support</h5>
                    <ul className={css.footer__nav_list}>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>support@ivi.ru</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>+380-44-3607826</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Telegram</NavLink>
                        </li>
                        <li className={css.footer__nav_item}>
                            <NavLink to={'/'}>Messenger</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Footer