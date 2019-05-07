import React,{Component} from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Start from "./start"
import Quest from "./quest"
import Kll from "./kll"
class Index extends Component{
    render(){
        return <Router>
           <Switch>
                <Route path="/newyear" component={Start}></Route>
                <Route path="/hhh/:sort/quest" component={Quest}></Route>        
                <Route path="/hhh/quest" component={Kll}></Route>        
           </Switch>
        </Router>
    }
}
export default Index