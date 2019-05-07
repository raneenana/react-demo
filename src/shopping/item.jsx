import React from "react"
import Check from "./checke"
import Copmputed from "./computed"

class Item extends React.Component{
    render(){
        let {
            groupKey,
            itemKey,
            itemCheck,
            imgSrc,
            title,
            price,
            num
        } = this.props
        return <li>
            <Check groupKey={groupKey} itemKey={itemKey} isCheck={itemCheck}/>
            <img src={imgSrc} alt=""/>
            <p>{title}</p>
            <p>{price}</p>
            {/* computed商品数量加或减 */}
            <Copmputed groupKey={groupKey} itemKey={itemKey} num={num} />
        </li>
    }
}
export default Item