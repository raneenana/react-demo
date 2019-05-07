import React,{Component} from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Start from "./start"
import More from "./more"
class Index extends Component{
    render(){
        let {match}=this.props;
        console.log(match)
        return <Switch>
            <Redirect exact from={`${match.path}`} to={`${match.path}/start`}></Redirect>
            <Route path={`${match.path}/start`} component={Start}></Route>
            <Route path={`${match.path}/more`} component={More}></Route>
        </Switch>
    }
}

export default Index