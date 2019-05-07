import React from "react"
 import {Consumer} from "./provider"
let spanStyle={
    width:15,
    height:15,
    borderRadius:"50%",
    border:"1px solid #ccc",
    display:"inline-block"
}
class Check extends React.Component{
    handleClick=(groupKey,itemKey,isCheck,store)=>{
        let check=!isCheck
        store.changeCheck({groupKey,itemKey,check,store})
    }
    render(){
        let {
            groupKey,
            itemKey,
            isCheck,    //决定是否被选中
        }=this.props
        return <Consumer>
            {
                store=>{
                    return <span style={{...spanStyle,background:isCheck?"orange":"transparent"}} onClick={()=>this.handleClick(groupKey,itemKey,isCheck,store)}> 

                    </span>
                }
            }
        </Consumer>
        
        
    }
}
export default Check