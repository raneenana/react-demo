import React from "react"
import {Consumer} from "./provider"
class Computed extends React.Component{
    changeNum=(type,store,{groupKey,itemKey,num})=>{
        if(type===true){
            num++;
            store.changeNum(groupKey,itemKey,num);
        }else{
            if(num<1){
                num=1
            }
            num--;
            store.changeNum(groupKey,itemKey,num);
        }
    }
    render(){
        let {num,groupKey,itemKey}=this.props
        return <Consumer>
            {
                store=>{
                    // console.log(changeNum)
                    return <div>
                                <span onClick={()=>this.changeNum(false,store,{groupKey,itemKey,num})}>-</span>
                                <span>{num}</span>
                                <span onClick={()=>this.changeNum(true,store,{groupKey,itemKey,num})}>+</span>
                            </div>
                    
                }
            }
           
        </Consumer>
        
    }
}
export default Computed