import React from 'react'
import "./index.css"
class Shopping extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <Head />
            <Choose />
        </div>)
    }
}

function Head() {
    return <div className="head">
        <p>茵佳兰迪INPLUS-LADY夏季新款  欧美时尚 个性条纹修身背带裙套装（两件套）MI16041952</p>
        <p>直降价：<b>￥288.00</b><span>2.9折</span></p>
        <p>银泰价：<del>￥328.00</del> 参考价：<del>￥988.00</del></p>
        <h3><span>直降</span>   活动时间：5月6日 9:00~5月10日 10:00</h3>
    </div>
}
class Choose extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            color:"黑色",
            isShow:false,
            borderName:"heighLight",
            heighLight:false,
            num:1,
            arr:[
                {name:"S",size:"黑色S",has:false},
                {name:"M",size:"黑色M",has:false},
                {name:"L",size:"黑色L",has:false}
            ]
        }   
     }
    render() {
        let {arr}=this.state
        return <div className="choose">
            <p>选择颜色：<i onClick={this.dui}>{this.state.color}</i>
                {this.state.isShow ? <b>√</b>:null}
            </p>
            <p>选择尺码：
                {
                    arr.map((item,key)=>{
                        return <span key={key} className={item.has?this.state.borderName:null} onClick={()=>{
                            this.setState({color:arr[key].size});
                            arr.forEach((item)=>{
                                item.has=false
                            })
                            arr[key].has=true
                        }}>{item.name}</span>
                    })
                }
            </p>
            <p className="num">
                <span><b onClick={this.ss}>-</b><b>{this.state.num}</b><b onClick={this.add}>+</b></span>
            </p>
        </div>
    }
    dui=()=>{
        let {isShow}=this.state
        this.setState({isShow:!isShow})
    }
    ss=()=>{
        let {num}=this.state
        console.log(num)
        num < 2? this.setState({num:1}) : this.setState({num:--num})
    }
    add=()=>{
        let {num}=this.state
        this.setState({num:++num})
    }
}
export default Shopping 