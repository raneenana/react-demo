import React from "react"

class Exam extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0,
            status:true
        }
    }
    render(){
        let {num,status}=this.state
        return <div>
            {
                status?<button onClick={this.add}>赞</button>:null
            }
            <span>{num}</span>
        </div>
    }
    add=()=>{
        let {num}=this.state
        num++
        if(num>10){
            this.setState({status:false})
        }else{
            this.setState({num:num})
        }
        
    }
}

export default Exam;