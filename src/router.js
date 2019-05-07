import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import Login from "./login/login"
import Main from "./Main"
function RootRouter(){
    return <Router>
        <React.Fragment>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/" component={Main}></Route>
            </Switch>
        </React.Fragment>
    </Router>
}
export default RootRouter
