import React from 'react'
import {NavLink} from 'react-router-dom'
import css from './Header.module.scss'

const Header = () => {
    return <header>
        <div className={`container ${css.header} justify-content-between align-items-center`}>
            <div className={"d-flex align-items-center"}>
                <div className={css.header__decoration}>
                    <NavLink to={'/'}><img src="https://st.tivision.ru/images/_main/ivi-top/logo.svg" alt=""/></NavLink>
                </div>
                <ul className={`navbar-nav mr-auto ${css.nav}`}>
                    <li className={`nav-item active ${css.nav__item}`}>
                        <NavLink exact activeClassName={css.nav__active} className={`nav-link ${css.nav__link}`} to={'/'}>Main</NavLink>
                    </li>
                    <li className={`nav-item ${css.nav__item}`}>
                        <NavLink  activeClassName={css.nav__active} className={`nav-link ${css.nav__link}`} to={'/movies'}>Movies</NavLink>
                    </li>
                    <li className={`nav-item ${css.nav__item}`}>
                        <NavLink  activeClassName={css.nav__active} className={`nav-link ${css.nav__link}`} to={'/series'}>Serials</NavLink>
                    </li>
                    <li className={`nav-item ${css.nav__item}`}>
                        <NavLink  activeClassName={css.nav__active} className={`nav-link ${css.nav__link}`} to={'/cartoons'}>Cartoons</NavLink>
                    </li>
                </ul>
            </div>
            <div className={"d-flex align-items-center"}>
                <div>
                    <div className="form-group has-search m-0">
                        <i className="fa fa-search form-control-feedback" />
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
                <NavLink to={'/profile'} className={css.user_profile}>
                    <i className="far fa-user" />
                </NavLink>
            </div>
            {/*<ul className={''}>*/}
            {/*    <li><NavLink to={'/'}>Main</NavLink></li>*/}
            {/*    <li><NavLink to={'/movies'}>Movies</NavLink></li>*/}
            {/*    <li><NavLink to={'/series'}>Serials</NavLink></li>*/}
            {/*    <li><NavLink to={'/cartoons'}>Cartoons</NavLink></li>*/}
            {/*</ul>*/}
        </div>
    </header>
}

export default Header