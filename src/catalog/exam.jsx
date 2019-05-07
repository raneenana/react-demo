import React from "react"
import ExamDay3 from '../examDay3'
import ExamDay2 from '../examDay2'
import NewYear from "../newYear"
import{
    Switch,Route
} from "react-router-dom"
function Exam(){
    return <div>
        {/* <h1>Exam</h1>
            <Link to="/exam/examday3">examday3</Link><br />
            <Link to="/exam/examday2">examday2</Link><br /> */}
            <Switch>
                <Route path="/exam/examday3" component={ExamDay3}></Route>
                <Route path="/exam/examday2" component={ExamDay2}></Route>
                <Route path="/exam/newyear" component={NewYear}></Route>
            </Switch>
    </div>
}
export default Exam