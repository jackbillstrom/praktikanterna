import React, { Component } from 'react';

class Headline extends Component {

    render() {
        return (
            <div id="headline">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-white mb-3">En stark stomme inom byggindustrin</h1>
                        <p className="lead text-white">Vi tillverkar det mesta inom byggnadssmide till byggbranschen.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Headline