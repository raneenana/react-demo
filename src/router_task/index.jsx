import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom"

function Login(){
    return <div>login</div>
}
function List(){
    return <div>list</div>
}
function Main(){
    return <div>main</div>
}
class Index extends React.Component{
    render(){
        return <Router>
            <div>
                <Link to="/">首页</Link>
                <Link to={{pathname:"/list",search:"udername='zhangsan'&password='1234566'"}}>列表</Link>
                <Link to="/login">登录</Link>
                <Switch>
                    <Redirect exact from="/" to="/list" />
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/list" component={List} />
                    <Route path="/list/abc" component={Main} />
                </Switch>
            </div>
            
        </Router>
    }
}
export default Index