import React from "react"
import "./css/add.css"
var addressData = [
  {
    concats: '赵小六',
    tel: '13423457890',
    address: '雨欣家园',
    area: '8号楼401室',
    index: 0
  },
  {
    concats: '张三',
    tel: '13423457890',
    address: '龙湖小区',
    area: '8号楼401室',
    index: 0
  },
  {
    concats: '李四',
    tel: '13423457890',
    address: '龙湖小区',
    area: '8号楼401室',
    index: 1
  },
  {
    concats: '王五',
    tel: '13423457890',
    address: '龙湖小区',
    area: '8号楼401室',
    index: 0
  }
]
class Index extends React.Component {
  static defaultProps = {
    addressData
  }
  render() {
    let { addressData } = this.props
    return <div>
      {
        addressData && addressData.map((item, key) => {
          return <li className="list" key={key}>
            <h3>{item.address}</h3>
            <p>{item.area}</p>
            <i className="tel">{item.concats}({item.index === 0 ? '先生' : '女士'}) ${item.tel}</i>
            <i className="edit" onClick={() => {
              this.props.history.push("/lesson/address/editaddress")
            }}>编辑</i>
          </li>
        })
      }
    </div>
  }
}
export default Index 