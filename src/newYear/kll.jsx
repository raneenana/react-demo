import React, { Component } from "react"
class Index extends Component {
    render() {
        console.log(this.props)
        console.log(this.state)
        let {search}=this.props.location;
        console.log(search)
        return <div>
            一共答对了<span>{search.slice(1).split("=")[1]}</span>题
        </div>
    }
}
export default Index
