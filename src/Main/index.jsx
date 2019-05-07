import React,{Component} from "react"
import {
    Route,
    Switch,
    Link
} from "react-router-dom"
import {Menu,Icon} from "antd"
import "./index.css"
import Lesson from "../catalog/lesson"
import Exam from "../catalog/exam"
import {menu as menuData} from "./menu.js"
const {SubMenu} = Menu;
export default class Index extends Component{
    state={
        height:200,
        transY:200
    }
    changeMenu=()=>{
        let {height,transY}=this.state
        if(transY!==height){
            this.setState({transY:height})
        }else{
            this.setState({transY:0})
        }
    }
    render(){
        let {height,transY}=this.state 
        return <React.Fragment>
            <div style={{
                    transform:`translateY(${transY}px)`,
                    height
                    }} className="main-aside">
                <Menu theme="dark" mode="vertical">
                    {
                        menuData&&menuData.map((item)=>{
                            console.log(item)
                            return <SubMenu key={item.subKey} title={item.subName}>
                                {
                                    item.child&&item.child.map((val)=>{
                                        return <Menu.Item key={val.key}>
                                            <Link to={`${item.path+val.path}`}>{val.itemName}</Link>
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        })
                    }
                </Menu>
            </div>
            <div className="menu-icon" onClick={this.changeMenu}>
                <Icon type="fullscreen"/>
            </div>
            <Switch>
                <Route path="/exam" component={Exam}></Route>
                <Route path="/lesson" component={Lesson}></Route>
            </Switch>
        </React.Fragment>
        
    }
}