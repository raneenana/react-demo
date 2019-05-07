import React,{Component} from "react"
import {connect} from "react-redux"
import "./home.css"
class Index extends Component{
    render(){
        let {movielist,history}=this.props;
        console.log(movielist);
        return <div className="cinema">
            <div className="Chead">
                <h3>猫眼电影</h3>
            </div>
            <div className="Csection">
                <div className="title">
                    <div className="left">
                        <p>北京</p>
                        <p>热映</p>
                        <p>待放</p>
                    </div>
                    <div className="right" onClick={
                      ()=>{  history.push('/lesson/cinema/search')}
                    }>搜索</div>
                </div>
                <ul className="datelist">
                {
                    movielist.alldata&&movielist.alldata.map((item,key)=>{
                            return <li key={key}>
                                <div className="img">
                                    <img src={require(`${item.src}`)} alt=""/>
                                </div>
                                <div className="about">
                                    <h3>{item.name}</h3>
                                    <p>{item.introduction}</p>
                                    <p>{item.actor}</p>
                                    <p>{item.address}</p>
                                </div>
                                <div className="look">
                                    <p>{item.mark}分</p>
                                    <p style={item.buy==="购票"?{background:"red",color:"#fff"}:{background:"skyblue",color:"#fff"}}>{item.buy}</p>
                                </div>
                            </li>
                    })
                }
                </ul>
            </div>
            <div className="Cfoot">
                <p style={{color:"red"}}>电影</p>
                <p>影院</p>
                <p>我的</p>
            </div>
        </div>
    }
}
let mapStateToProps=(store)=>{
    return store
}
Index = connect(mapStateToProps)(Index)
export default Index