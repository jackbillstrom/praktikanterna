import React, { Component } from 'react';
import logo from '../../images/arosbyggsmide.gif'
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                <NavLink exact to="/" activeClassName="active" className="nav-link"><img src={logo} alt="Logo" className="navbar-brand"/></NavLink>
                    

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pl-3">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Hem</NavLink>
                            </li>
                            <li className="nav-item pl-3">
                                <NavLink exact to="/about" activeClassName="active" className="nav-link">Om oss</NavLink>
                            </li>
                            <li className="nav-item pl-3">
                                <NavLink exact to="/making" activeClassName="active" className="nav-link">Tillverkning</NavLink>
                            </li>
                            <li className="nav-item pl-3">
                                <NavLink exact to="/reference" activeClassName="active" className="nav-link">Referenser</NavLink>
                            </li>
                            <li className="nav-item pl-3">
                                <NavLink exact to="/partners" activeClassName="active" className="nav-link">Partners</NavLink>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header