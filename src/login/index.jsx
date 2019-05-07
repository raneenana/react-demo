import React,{Component} from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Login from "./login"
import Main from "../Main"
import Autho from "./autho"
// Main=Autho(Main)
export default class Index extends Component{
    render(){
        return <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/" component={Autho(Main)}></Route>
            </Switch>
        </Router>
    }
}