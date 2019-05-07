import React from "react"
import {Provider} from "./provider"
import datas from "./data"
import Total from "./total"
import Group from "./group"
// console.log(datas)
class Shopping extends React.Component{
    state={
        datas:datas
    }
    changeNum=(groupKey,itemKey,num)=>{
        let datas=this.state.datas;
        datas.group[groupKey].item[itemKey].num=num
        datas.allnum =this.getAllNum(datas)
        datas.allPrice =this.getAllPrice(datas)  
        console.log(datas.allnum)
        this.setState({datas:datas})

    }
    changeCheck=({groupKey,itemKey,check})=>{
        let datas =this.state.datas
        if(groupKey===-1 && itemKey ===-1){
            //全选
            datas.allCheck=check
            datas.group.forEach((item)=>{
                item.groupCheck=check;
                item.item.forEach((val)=>{
                    val.itemCheck=check
                })
            })
        }else if(groupKey>-1 &&itemKey===-1){
            //组选
            datas.group[groupKey].groupCheck=check
            datas.group[groupKey].item.forEach((item)=>{
                item.itemCheck=check
            })
        }else if(groupKey>-1 &&itemKey>-1){
            //条选
            datas.group[groupKey].item[itemKey].itemCheck=check 
            // 控制组
            datas.group[groupKey].groupCheck = datas.group[groupKey].item.every(item=>item.itemCheck);
            // 控制全选
            datas.allCheck = datas.group.every(item=>item.groupCheck);
        }
        datas.allnum =this.getAllNum(datas)     
        datas.allPrice =this.getAllPrice(datas)     
        this.setState({datas:datas}) 
    }
    getAllNum=(datas)=>{
        let allNum=0;
        datas.group.forEach((item)=>{
            item.item.forEach((val)=>{
                if(val.itemCheck){
                    allNum+=val.num;
                }
            })
        })
        return allNum 
    }
    getAllPrice = (datas)=>{
        let allPrice = 0;
        datas.group.forEach(item=>{
          item.item.forEach(val=>{
            if(val.itemCheck){
              allPrice += val.num * val.price;
            }
          })
        });
        return allPrice;
      }
    render(){
        let {datas}=this.state
        let obj={
            datas,
            changeNum:this.changeNum,
            changeCheck:this.changeCheck
        }
        return <Provider value={obj}>
            {
                datas.group && datas.group.map((item,key)=>{
                    return <Group key={key} groupKey={key} itemKey={-1} {...item}/>
                })
            }
            <Total />
        </Provider>
    }
}
export default Shopping 