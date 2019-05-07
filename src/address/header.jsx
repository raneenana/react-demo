import React from "react"

import "./css/header.css"
class Index extends React.Component{
    static defaultProps={
        backBtnText:"back",
        title:"收货地址",
        isRight:true,
        rightBtnText:"新增地址",
        rightBtnPath:"/lesson/address/pushaddress"
    }
    render(){
        let {
            backBtnText,
            title,
            isRight,
            rightBtnText,
            rightBtnPath
        }=this.props
        return <header>
            <div onClick={ this.props.history.goBack}>{backBtnText}</div>
            <div>{title}</div>
            <div>
                {
                    isRight? <a href={rightBtnPath}>{rightBtnText}</a>:null
                }
            </div>
               
        </header>
    }
}
export default Index 