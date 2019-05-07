import React,{Component} from "react"
import "./more.css"
import {connect} from "react-redux"
class Index extends Component{
    state={
        isShow:false
    }
    changeList=(item)=>{
        if(item.code===0){
            item.code=1;
            let obj={
                code:1,
                icon:"",
                title:item.title,
            }
            console.log(this.props);
            this.props.dispatch({type:"PUSH",obj:obj})
            this.setState({})
        }
        else if(item.code===1){
            item.code=0;
             let obj={
                code:1,
                icon:"",
                title:item.title,
            } 
            this.props.dispatch({type:"POP",obj:obj})
            this.setState({})
        }
    }
    addApp=(data)=>{
        let {isShow}=this.state
        return <div>
            <h3>{data.title}</h3>
            <div>
                {
                    data.examples&&data.examples.map((item,key)=>{
                        return <p 
                        onClick={()=>{this.changeList(item)}}
                        key={key}>{item.title}<i className={isShow?"":"edit" }style={item.code?{background:"red"}:{background:"blue"}}>{item.code?"-":"+"}</i></p>
                    })
                }
                {
                    isShow?"取消":<span onClick={()=>{
                        isShow=!isShow;
                        this.setState({isShow})
                    }}>{data.title==="我的应用"?"编辑":""}</span>
                }
            </div>
        </div>
    }
    changeShow=()=>{
        let {isShow}=this.state;
        isShow=!isShow;
        this.setState({isShow})
    }
    render(){
        let {datalist,history}=this.props;
        let {isShow}=this.state;
        return <div className="letcar">
            <div className="headApp">
                <div onClick={()=>{
                    history.goBack();
                }}>返回</div>
                <div>业务中心</div>
                <div onClick={isShow?()=>{this.changeShow()}:null}>{isShow?"完成":""}</div>
            </div>
            <div className="section">
                {
                    this.addApp(datalist.myApp,0)
                }
                {
                    this.addApp(datalist.carApp,1)
                }
                {
                    this.addApp(datalist.cardApp,2)
                } 
                
            </div>
        </div>  
    }
}
let mapStateToProps=store=>{
    // console.log(store)
    return store
}
Index = connect(mapStateToProps)(Index)
export default Index