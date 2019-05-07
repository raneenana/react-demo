import React from "react"

class ExamDay2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <HeadBar />
            <NavBar />
        </div>
    }
}
function HeadBar() {
    return <h1><a href="#">豆瓣</a></h1>
}
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                Nav: [
                    { name:"电影",color:"red"},
                    { name:"图书",color:"orange"},
                    { name:"广播",color:"pink"},
                    { name:"小组",color:"yellow"}
                ]
            }

    }
    render() {
        let {Nav}=this.state
        return <ul>
            {
                Nav.map((item,key)=>{
                    return <li key={key} style={{color:item.color}}>{item.name}</li>
                })
            }
        </ul>
    }
}
export default ExamDay2