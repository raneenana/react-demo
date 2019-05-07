import React from "react"
import Check from  "./checke"
import Item from './item'
class Group extends React.Component{
    
    render(){
        // console.log(this.props);
        let {groupTittle,item,groupKey,groupCheck}=this.props
        return <div>
            <h3>
                <Check groupKey={groupKey} itemKey={-1} isCheck={groupCheck}/>{groupTittle}  
            </h3>
            <ul>
                {
                    item && item.map((val,key)=>{
                        return <Item groupKey={groupKey} itemKey={key} key={key} {...val}/>
                    })
                }
            </ul>
            <p>一共dfd件商品，总共15000元</p>
        </div>
    }
}
export default Group