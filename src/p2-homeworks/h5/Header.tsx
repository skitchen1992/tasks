import React from 'react'
import './pages/Nav.scss'
import {NavLink} from "react-router-dom"
import {PATH} from "./Routes";

function Header(props:any) {
    return (
        <div className="header">
            <nav className="nav">
                <input type="checkbox" className="nav__cb" id="menu-cb"/>
                <div className="nav__content">
                    <ul className="nav__items">
                        <li className="nav__item">
        <NavLink to = {PATH.PRE_JUNIOR} className="nav__item-text">
          Pre-junior
        </NavLink>
                        </li>
                        <li className="nav__item">
        <NavLink to = {PATH.JUNIOR} className="nav__item-text">
          Junior
        </NavLink>
                        </li>
                        <li className="nav__item">
        <NavLink to = {PATH.JUNIOR_PLUS} className="nav__item-text">
          Junior+
        </NavLink>
                        </li>
                        <li className="nav__item">

                        </li>
                    </ul>
                </div>
                <label className="nav__btn" htmlFor="menu-cb"></label>
            </nav>

        </div>
    )
}

export default Header
