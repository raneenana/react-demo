let data=[
    {
        title:"sdfadfa",
        num:2
    },{
        title:"sdfadfa",
        num:2
    },{
        title:"sdfadfa",
        num:2
    },{
        title:"sdfadfa",
        num:2
    },
]
let datalist=(state=data,action)=>{
    switch(action.type){
        case "A":
            return {...state,...action};
        default:
            return {...state}
    }
}
export default datalist