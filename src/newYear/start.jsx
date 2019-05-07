import React, { Component } from "react"
import "./css/style.css"
class Index extends Component {
    render() {
        console.log(this.props)
        return <div className="wrap">
            <div className="top">
                <img src={require("./img/2.png")} alt="" />
            </div>
            <div className="main">
                <div className="h">
                    <img src={require("./img/5.png")} alt="" />
                    <img src={require("./img/6.png")} className="h1" alt="" />
                    <img src={require("./img/7.png")} className="h2" alt="" />
                    <img src={require("./img/3.png")} className="h3" alt="" />
                    <img src={require("./img/4.png")} className="h4" alt="" />
                    <img src={require("./img/8.png")} onClick={()=>this.props.history.push('hhh/0/quest')} 
                    className="h5" alt="" />
                </div>

            </div>
            <div className="bottom">
                <img src={require("./img/1.png")} alt="" />
            </div>
        </div>
    }
}
export default Index
