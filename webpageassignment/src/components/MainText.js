import React, { Component } from 'react';

class MainText extends Component {

    render() {
        return (
            <div id="main-text" className="col-sm-12 col-md-6">
                <h2>Vi konstruerar efter dina önskemål!</h2>
                <p className="pt-3 pb-1">Aros Byggnadssmide är företaget med många egna kluriga idéer för att hitta fungerande läsningar på konstruktionsproblem till olika byggnationer.</p>
                <p>Vi tillverkar och monterar allt från enkla stommar i stål till komplexa former i aluminium. Alla våra kunder får sin egen skräddarsmidda lösning. Problem är till för att lösas, så ring oss när ni har frågor kring stålkonstruktioner.</p>
                <span className="pt-4"><i>Välkommen!</i></span>
            </div>
        )
    }
}

export default MainText