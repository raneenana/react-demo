import React,{Component} from "react"
// import {
//     Route
// } from "react-router-dom"
import "./css/style.css"
import data from "./data"
let styleCss={
    background:"orange",
    color:"#fff"
}

class Index extends Component{
    clck=(sure,key)=>{
            let { num } = this.state;
        if (sure === key) {
            num++;
            this.setState({ num })
            console.log(num)
        } 
        let sort =this.props.match.params.sort*1;
        sort++;
        this.props.history.push(`/hhh/${sort}/quest`)  
         setTimeout(()=>{
             if(sort>4){ 
            // sort=4;
                this.props.history.push(`/hhh/quest?abc=${this.state.num}`)      
        }
    },1000)
    }
    state={
            num:0
        }
    render(){
        console.log(this.props)
        let sort =this.props.match.params.sort*1;
        return <div>
            <div className="head">
                {
                    data.list && data.list.map((item,key)=>{
                        return <p style={key<=sort?styleCss:null} key={key}>{item.hh}</p>
                    })
                }
            </div>
            <div className="main">
                <p>{data.list[sort].tit}</p>
                {
                    data.list[sort].check.map((item,key)=>{
                        return <p key={key} onClick={()=>{this.clck(data.list[sort].sure,key)}}>{item}</p>
                    })
                }
            </div>
        </div>
    }
}
export default Index