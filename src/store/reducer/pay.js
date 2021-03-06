let date={
    myApp:{
        title:"我的应用",
        examples:[
            {
                code:1,
                title:"机动车检验预约"
            },{
                code:1,
                title:"备案非本人机动车"
            },{
                code:1,
                title:"申领免检标志"
            },{
                code:1,
                title:"遗失补领驾驶证"
            },{
                code:1,
                title:"期满换领驾驶证 "
            },{
                code:1,
                title:"补换领行驶证"
            },{
                code:1,
                title:"补换领机动车号牌  "
            },{
                title:"更多"
            }
        ]
    },
    carApp:{
        title:"机动车业务",
        examples:[
            {
                code:0,
                icon:"",
                title:"新车选号"
            },{
                code:0,
                icon:"",
                title:"在用车选号"
            },{
                code:0,
                icon:"",
                title:"新能源车换牌选号"
            },{
                code:0,
                icon:"",
                title:"号牌号段公布"
            },{
                code:1,
                icon:"",
                title:"备案非本人机动车"
            },{
                code:1,
                icon:"",
                title:"机动车检验预约"
            },{
                code:0,
                icon:"",
                title:"新能源车换牌预约"
            },{
                code:0,
                icon:"",
                title:"补换领机动车牌号"
            },{
                code:1,
                icon:"",
                title:"补换领行驶证"
            },{
                code:0,
                icon:"",
                title:"补领检验合格标志"
            },{
                code:0,
                icon:"",
                title:"变更机动车联系方式"
            },{
                code:0,
                icon:"",
                title:"机动车挂靠申请"
            },{
                code:1,
                icon:"",
                title:"申领免检标志"
            },{
                code:0,
                icon:"",
                title:"机动车转籍申请"
            },{
                code:1,
                icon:"",
                title:"补换领机动车号牌"
            }
        ]
    },
    cardApp:{
        title:"驾驶证业务",
        examples:[
            {
                code:0,
                icon:"",
                title:"考试预约"
            },{
                code:0,
                icon:"",
                title:"取消考试预约"
            },{
                code:0,
                icon:"",
                title:"考试信息公布"
            },{
                code:0,
                icon:"",
                title:"考试费缴纳"
            },{
                code:0,
                icon:"",
                title:"初学增驾工本费缴纳"
            },{
                code:0,
                icon:"",
                title:"电子学习驾驶证明"
            },{
                code:1,
                icon:"",
                title:"期满换领驾驶证"
            },{
                code:1,
                icon:"",
                title:"遗失补领驾驶证"
            },{
                code:0,
                icon:"",
                title:"超龄换领驾驶证"
            },{
                code:0,
                icon:"",
                title:"损毁换领驾驶证"
            },{
                icon:"",
                title:"延期换领驾驶证"
            },{
                code:0,
                icon:"",
                title:"延期驾驶证审验"
            },{
                code:0,
                icon:"",
                title:"提交驾驶证件照片"
            },{
                code:0,
                icon:"",
                title:"变更驾驶证联系方式"
            },{
                code:0,
                icon:"",
                title:"驾驶证挂靠申请"
            },{
                code:0,
                icon:"",
                title:"延期提交身体证明"
            }
        ]
    }
}
let datalist=(state=date,action)=>{
    switch(action.type){
        case "PUSH":{
            state.myApp.examples.splice(state.myApp.examples.length-2,0,action.obj)
            return state;
        }
        case "POP": {
            state.myApp.examples.forEach((item,index)=>{
                if(item.title===action.obj.title){
                   return state.myApp.examples.splice(index,1)
                }
            })
        }
        default:
            return state
    }
}
export default datalist