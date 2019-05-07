import React from "react"
import{
    Switch,
    Route
} from "react-router-dom"
import "./js/rem"
import "./css/reset.css"
import "./css/index.css"
import "./css/section.css"
import Addresslist from "./addresslist"
import Pushaddress from "./pushaddress"
import Editaddress from "./editaddress"
import Header from "./header"
class Index extends React.Component {
    render() {
        let {match,history}=this.props
        console.log(match)
        return <div className="address">
                <Header history={history}/>
                <section>
                    <Switch>
                        <Route path={`${match.path}/addresslist`} component={Addresslist}></Route>
                        <Route path={`${match.path}/pushaddress`} component={Pushaddress}></Route>
                        <Route path={`${match.path}/editaddress`} component={Editaddress}></Route>
                        {/* <Redirect from={match.path} to={`${match.path}/editaddress`}></Redirect> */}
                    </Switch>
                </section>
            </div>
    }
}
export default Index 