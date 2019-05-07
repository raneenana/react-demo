import React,{Component} from "react"
import {connect} from "react-redux"
class Index extends Component{
    render(){
        let {id}=this.props.location.state;
        let {alldata}=this.props.movielist;
        return <div>
            {
                alldata.map((item)=>{
                    if(item.id===id){
                        return <div>
                            { item.name }
                        </div>
                    }
                })
            }
        </div>
    }
}
let mapStateToProps=(store)=>{
    return store
}
Index = connect(mapStateToProps)(Index)
export default Index
