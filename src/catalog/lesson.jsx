import React from "react"
import Drag from '../drag'
import Shopcar from '../shopcar'
import Shopping from '../shopping'
import Address from '../address'
import Login from "../login"
import MonthA from "../monthA"
import Pay from "../pay"
import Cinema from "../cinema"
import{
    Switch,
    Route
} from "react-router-dom"
function Lesson(){
    return <div>
            {/* <Link to="/lesson/drag">drag</Link><br />
            <Link to="/lesson/shopcar">shopcar</Link><br />
            <Link to="/lesson/shopping">shopping</Link><br />
            <Link to="/lesson/address">address</Link><br /> */}
            <Switch>
                <Route path="/lesson/address" component={Address}></Route>
                <Route path="/lesson/drag" component={Drag}></Route>
                <Route path="/lesson/shopcar" component={Shopcar}></Route>
                <Route path="/lesson/shopping" component={Shopping}></Route>
                <Route path="/lesson/login" component={Login}></Route>
                <Route path="/lesson/monthA" component={MonthA}></Route>
                <Route path="/lesson/pay" component={Pay}></Route>
                <Route path="/lesson/cinema" component={Cinema}></Route>
            </Switch>
    </div>
}
export default Lesson