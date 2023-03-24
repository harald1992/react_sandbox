import { useState } from "react";
import CourseInput from "./CourseInput"
import GoalItem from "./GoalItem";


let GOALS = [{
    text: 'goal text'
}]

export const CourseGoals = props => {
    const [goals, setGoals] = useState([]);

    let goalContent = <p>No Content Yet </p>;

    const deleteItem = (item) => {
        setGoals(prevVal => prevVal.filter(goal => goal !== item))
    }

    const onAddGoal = (goalText) => {
        console.log(goalText);
        setGoals(prevVal => {
            return [{ text: goalText }, ...prevVal];
        })
    }

    if (goals.length > 0) {
        goalContent = goals.map((goal, i) => {
            return (
                <GoalItem key={i} deleteItem={deleteItem} goal={goal} />
            )
        })
    }

    return (
        <>
            <CourseInput onAddGoal={onAddGoal} />

            <div>{goalContent} </div>




            {/* <pre>{JSON.stringify(goals)}</pre> */}
        </>
    )
}