import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { APP_BAR_ITEMS } from '../../constants/router'

const AppBar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Medium
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    {
                        APP_BAR_ITEMS.map(({url, title}) => (
                            <li className="nav-item" key={url}>
                                <NavLink to={url} className="nav-link" exact>
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default AppBar