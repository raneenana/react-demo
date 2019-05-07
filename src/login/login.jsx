import React,{Component} from "react"
import {Button,Input} from "antd"
import 'antd/dist/antd.css';  
export default class Index extends Component{
    state={
        val:""
    }
    login=()=>{
        let val =this.state.val
        if(!val){
            return;
        }
        localStorage.setItem('isLogin',JSON.stringify({user:val,status:2}));
        this.props.history.push("/")
    }
    render(){
        let {val} = this.state
        return <div>
            <div>
                <Input value={val} onChange={ev=>{
                    this.setState({val:ev.target.value})
                }} type="请输入用户名"/>
            </div>
            <div>
                <Button onClick={()=>this.login()}>登录</Button>
            </div>
        </div>
    }
}