import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <footer className="page-footer font-small teal pt-4 pb-2">
                    <div className="container-fluid text-md-left">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center">
                                <ul id="footer-address">
                                    <li className="nav-link"><h5 className="text-uppercase font-weight-bold">Adress</h5></li>
                                    <li className="nav-link">Aros Byggsmide AB</li>
                                    <li className="nav-link">Transformatorgatan 10</li>
                                    <li className="nav-link">721 37 Västerås</li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 text-center">
                                <ul id="footer-contact">
                                    <li className="nav-link"><h5 className="text-uppercase font-weight-bold">Kontakt</h5></li>
                                    <li className="nav-link">Tfn 021 13 22 11</li>
                                    <li className="nav-link">Fax 021 12 43 35</li>
                                    <li className="nav-link">e-post: info@arosbyggsmide.se</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer