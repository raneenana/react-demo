import React, { Component } from "react"
import "./search.css"
import { connect } from "react-redux"
class Index extends Component {
  state = {
    value: "",
    ...this.props
  }
  change = (ev) => {
    let { alldata, value } = this.state.movielist;
    value = ev.target.value;
    if (value !== "") {
      this.props.dispatch({ type: "CHANGE" })
      alldata.forEach((item) => {
        if (item.name.indexOf(value) !== -1) {
          let obj = item;
          this.props.dispatch({ type: "PUSH", obj: obj })
        }
      })
    }
    this.setState({ value })
  }
  cancel = () => {
    console.log("1111111111111111111111111111")
    console.log(this.props)
    let {history} = this.props
    history.goBack()
  }

  render() {
    let { blurlist } = this.props.movielist;
    console.log(blurlist)
    return <div>
      <div className="Search">
        <div className="Shead">
          <div onClick={() => this.cancel()}>back</div>
          <div>搜索</div>
          <div></div>
        </div>
        <div className="Ssection">
          <div className="title">
            <input type="text" value={this.state.value} onChange={(ev) => {
              this.props.dispatch({ type: "CHANGES" })
              this.change(ev)
            }} />
            <span onClick={() => this.cancel()}>取消</span>
          </div>
          <ul className="list">
            {
              blurlist && blurlist.map((item, key) => {
                return <li key={key} onClick={() => {
                  console.log(item.id)
                  this.props.history.push({ pathname: "/lesson/cinema/detail", state: { id: item.id } })
                }}>
                  <div className="img">
                    <img src={require(`${item.src}`)} alt="" />
                  </div>
                  <div className="about">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                    <p>{item.actor}</p>
                    <p>{item.address}</p>
                  </div>
                  <div className="look">
                    <p>{item.mark}分</p>
                    <p style={item.buy === "购票" ? { background: "red", color: "#fff" } : { background: "skyblue", color: "#fff" }}>{item.buy}</p>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  }
}
let mapStateToProps = (state) => {
  return state
}
Index = connect(mapStateToProps)(Index)
export default Index