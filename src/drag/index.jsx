/*
 * @Author: LiXiaoNa 
 * @Date: 2019-02-15 16:49:29 
 * @Last Modified by: LiXiaoNa
 * @Last Modified time: 2019-05-07 15:28:18
 */
import React from "react"

const device={
    position:"absolute",
    width:200,
    height:200,
    background:"red",
    cursor:'printer'
}
class DragBox extends React.Component{
    constructor (props){
        super(props)
        this.state={
            left:10,
            top:0
        }
    }  
    mouseDowm=ev=>{
        let {left,top}=this.state;
        let disX=ev.clientX-left;
        let disY=ev.clientY-top;
        document.onmousemove=ev=>{
            let left1=ev.clientX-disX
            let top1=ev.clientY-disY
            this.setState({left:left1,top:top1})
        }
        document.onmouseup=()=>{
            document.onmousemove=null
            document.onmouseup=null
        }
    }
    render(){
        let {left,top}=this.state;
        return <div style={{...device,left:left,top:top}} onMouseDown={this.mouseDowm}
        >
        
        </div>
    }
}
export default DragBox


