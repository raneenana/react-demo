import React,{Component} from "react"
import {
    Redirect
} from "react-router-dom"

function Autho(RouterComponent){
    return class extends Component{
        render(){
            
            let isLogin=JSON.parse(localStorage.getItem("isLogin"))
            console.log(1)
            if(!isLogin||isLogin.status!==1){
               return <Redirect to="/login"></Redirect>
            }
            return <RouterComponent {...this.props}/>
        }
    }
}
export default Autho;