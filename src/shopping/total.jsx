import React from "react"
import Check from "./checke"
import {Consumer} from "./provider"
class Total extends React.Component{
    render(){
        return <Consumer>
            {
                store=>{
                    let {allPrice,allCheck,allnum}=store.datas;
                    return <div>
                        <Check groupKey={-1} itemKey={-1} isCheck={allCheck}/>全选
                        <p>一共{allnum}件商品</p>
                        <p>需要支付：{allPrice}</p>
                        <button>结算</button>
                    </div>
                }
            }
        </Consumer>
    }

}
export default Total