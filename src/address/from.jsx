import React from "react"
class Index extends React.Component {
  static defaultProps = {
    concats: "张飒",
    sex: 1,
    tel: 12312334566,
    address: "哈哈哈",
    area: "99"
  }
  state = {
    fromProps: {
      ...this.props
    }
  }
  setValue = key => {
    let { page } = this.state.fromProps;
    return page === "edit" ? this.state.fromProps[key] : ""
  }
  changeValue = (key, value) => {
    let { fromProps } = this.state
    fromProps[key] = value;
    this.setState({ fromProps })
  }
  render() {
    window.form = this
    let num = this.setValue('sex')
    return <React.Fragment>
      <ul>
        <li className="input">
          <span>联系人</span>
          <input value={this.setValue("concats")} onChange={(ev) => {
            this.changeValue("concats", ev.target.value)
          }}
            data-prop="concats" type="text" />
        </li>
        <li className="sex">
          <span className={num === 0 ? "active" : ""} onClick={() =>
            this.changeValue('sex', 0)
          }>先生</span>
          <span className={num === 1 ? "active" : ""} onClick={() =>
            this.changeValue('sex', 1)
          }>女士</span>
        </li>
        <li className="input">
          <span>电话</span>
          <input value={this.setValue("tel")} onChange={(ev) => {
            this.changeValue("tel", ev.target.value)
          }} type="text" data-prop="tel" />
        </li>
        <li className="input">
          <span>地址</span>
          <input value={this.setValue("address")} onChange={(ev) => {
            this.changeValue("address", ev.target.value)
          }} type="text" data-prop="address" />
        </li>
        <li className="input">
          <span>门牌号</span>
          <input value={this.setValue("area")} onChange={(ev) => {
            this.changeValue("area", ev.target.value)
          }} type="text" data-prop="area" />
        </li>
      </ul>
      <div className="btn">确定</div>
    </React.Fragment>
  }
}
export default Index 