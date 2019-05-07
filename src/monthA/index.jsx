import React, { Component, createContext } from "react"
import { pageData } from "./pagedata"
import { Input, Icon } from "antd"
import 'antd/dist/antd.css';
import style from "./style.module.css"
import { connect } from "react-redux"

const { Provider, Consumer } = createContext()
class Index extends Component {
  state = {
    pageData
  }
  updateView = (newPageData) => {
    this.setState({ pageData: newPageData })
  }
  render() {
    let { pageData } = this.state
    let { list } = this.props;
    console.log(list)
    let store = {
      pageData,
      updateView: this.updateView
    }
    return <Provider value={store}>
      <ul>
        {
          pageData && pageData.map((item, key) => {
            return <SinglePage key={key} pageSingle={item} />
          })
        }
      </ul>
    </Provider>

  }
}
class SinglePage extends Component {
  changeValue = (ev, store) => {
    this.props.pageSingle.title = ev.target.value
    store.updateView(store.pageData)
  }
  doubleClick = (store) => {
    this.resetEdit(store)
    this.props.pageSingle.isEdit = true;
    store.updateView(store.pageData)
  }
  onKeyDown = (ev, store) => {
    let keyCode = ev.keyCode;
    if (keyCode !== 13) {
      return;
    }
    this.props.pageSingle.isEdit = false;
    store.updateView(store.pageData)
  }
  resetEditObj = obj => {
    obj.isEdit = false;
    obj.child && obj.child.forEach(item => {
      this.resetEditObj(item)
    })
  }
  resetEdit = (store) => {
    store.pageData.forEach(item => {
      this.resetEditObj(item)
    })
  }
  add = (store) => {
    let obj = {
      title: "子页面",
      isOpen: true,
      isEdit: true
    }
    this.resetEdit(store)
    if (!(this.props.pageSingle.child instanceof Array)) {
      this.props.pageSingle.child = [];
    }
    this.props.pageSingle.child.forEach((item) => {
      item.isEdit = false
    })
    this.props.pageSingle.child.push(obj);
    store.updateView(store.pageData)
  }
  renderTitle = (title, isEdit, store) => {
    if (isEdit) {
      return <div className={style.inputWrap}>
        <Input value={title} onChange={ev => {
          this.changeValue(ev, store)
        }}
          onKeyDown={ev => { this.onKeyDown(ev, store) }} />
      </div>
    } else {
      return <span onDoubleClick={() => this.doubleClick(store)}>{title}</span>
    }
  }
  del = (store) => {
    let { index, parentArr } = this.props;
    if (this.props.pageSingle.child && (this.props.pageSingle.child.length > 0)) {
      let result = window.confirm("点击确定删除该页面及子页面，点击取消仅删除该页面")
      if (result) {
        parentArr.splice(index, 1);
      } else {
        let child = this.props.pageSingle.child;
        parentArr.splice(index, 1, child)
      }
    } else {
      parentArr.splice(store.pageData);
    }
    store.updateView(store.pageData)
  }
  render() {
    let { key, pageSingle } = this.props
    return <Consumer>
      {
        store => {
          return <li key={key} className={style.page} >
            <div className={style.title}>
              {
                this.renderTitle(pageSingle.title, pageSingle.isEdit, store)
              }
              <div className={style.btn}>
                <Icon style={{ marginRight: 10 }} type="plus-circle" theme="filled" onClick={() => { this.add(store) }} />
                <Icon type="delete" onClick={() => { this.del(store) }} theme="filled" />
              </div>
            </div>
            <ChildPage {...this.props} />
          </li>


        }
      }
    </Consumer>
  }
}
function ChildPage(props) {
  let { child } = props.pageSingle;
  // if(!isOpen){
  //     return null
  // }
  if (!child || child.length === 0) {
    return null
  }
  return <ul className={style.ul}>
    {
      child && child.map((item, key) => {
        return <SinglePage index={key} parentArr={child} key={key} pageSingle={item} ></SinglePage>
      })
    }
  </ul>
}
let mapStateToProps = (state) => {
  return state;
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}
Index = connect(mapStateToProps, mapDispatchToProps)(Index)
export default Index