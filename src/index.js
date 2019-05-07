import React from 'react'
import ReactDOM from 'react-dom'
// import ExamDay3 from './examDay3'
// import ExamDay2 from './examDay2'
// import Drag from './drag'
// import Shopcar from './shopcar'
// import Shopping from './shopping'
import RootRouter from './router'
import store from "./store"
import {Provider} from "react-redux";
// import RootRouter from './address/index'
// import './store'
// import Address from "./address"
// import Newyear from "./newYear"
// import MonthA from "./monthA"



// ReactDOM.render(<MonthA />,document.getElementById("root"))
// ReactDOM.render(<Newyear />,document.getElementById("root"))
//ReactDOM.render( <ExamDay3 /> , document.getElementById('root'));
// ReactDOM.render( <ExamDay2 /> , document.getElementById('root'));
// ReactDOM.render( <Drag /> , document.getElementById('root'));
// ReactDOM.render( <Shopcar /> , document.getElementById('root'));
// ReactDOM.render( <Shopping /> , document.getElementById('root'));
// ReactDOM.render( <Router /> , document.getElementById('root'));
// ReactDOM.render( <Catalog /> , document.getElementById('root'));
ReactDOM.render( 
    <Provider store={store}>
        <RootRouter />
    </Provider> , 
    document.getElementById('root')
);
// ReactDOM.render( <Address /> , document.getElementById('root'));