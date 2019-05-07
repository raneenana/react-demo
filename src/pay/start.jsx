import React,{Component} from "react"
import "./index.css"
import {connect} from "react-redux"
class Index extends Component{
    link=()=>{
        let {history}=this.props;
        history.push("/lesson/pay/more")
    }
    render(){
        let {datalist}=this.props;
        return <div>
                <h3>{datalist.myApp.title}</h3>
                <div className="carWrap">
                    {
                            datalist.myApp&&datalist.myApp.examples.map((item,key)=>{
                                return <p onClick={key===datalist.myApp.examples.length-1?this.link:null} key={key}>{item.title}</p>
                            })
                        }
                </div>
            </div>   
    }
}
let mapStateToProps=store=>{
    console.log(store)
    return store
}
Index = connect(mapStateToProps)(Index)
export default Index