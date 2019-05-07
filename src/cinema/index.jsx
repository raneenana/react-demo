import React,{Component} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Home from "./home"
import Search from "./search"
import Detail from "./detail"
class Index extends Component{
    render(){
        let {match}=this.props
        return <div className="cinema">
            <Switch>
                <Redirect exact from={`${match.path}/`} to={`${match.path}/home`}></Redirect>
                <Route path={`${match.path}/home`} component={Home}></Route>
                <Route path={`${match.path}/search`} component={Search}></Route>
                <Route path={`${match.path}/detail`} component={Detail}></Route>
            </Switch>
        </div>
    }
}
export default Index;