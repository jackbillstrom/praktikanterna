import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Reference extends Component {

    render() {
        return (
            <div id="reference-list" className="col-sm-12 col-md-6">

                <ul className="list-group">
                    <li className="list-group-item"><h3>Referenser</h3></li>
                    <li className="list-group-item">Hälla fackhandel - stålstommar</li>
                    <li className="list-group-item">Västerås Centrallasarett - påbyggnad av ytterligare en våning</li>
                    <li className="list-group-item">IKEA - ombyggnad av entrén</li>
                    <NavLink exact to="/reference" className="list-group-item link bg-dark">Fler referenser <i className="fas fa-arrow-right"></i></NavLink>
                </ul>
            </div>
        )
    }
}

export default Reference