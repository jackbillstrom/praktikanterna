import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './views/Homepage';


const Content = (props) => {
    return (
        <main>
            <Switch>
                <Route path='/' component={Homepage}></Route>
            </Switch>
        </main>
    )
}

export default Content