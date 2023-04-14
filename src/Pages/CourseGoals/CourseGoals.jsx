import { useState, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";
import CourseInput from "./CourseInput"
import GoalItem from "./GoalItem";


let GOALS = [{
    text: 'goal text'
}]

export const CourseGoals = props => {
    const [goals, setGoals] = useState(() => JSON.parse(localStorage.getItem('goals')));

    const deleteItem = (item) => {
        setGoals(prevVal => prevVal.filter(goal => goal !== item))
    }

    const onAddGoal = (goalText) => {
        console.log(goalText);
        setGoals(prevVal => {
            return [{ text: goalText }, ...prevVal];
        })
    }

    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals))
    }, [goals])

    let goalContent = <p>No Content Yet </p>;

    if (goals.length > 0) {
        goalContent = goals.map((goal, i) => {
            return (
                <GoalItem key={i} deleteItem={deleteItem} goal={goal} />
            )
        })
    }

    return (
        <>
            <AuthContext.Consumer>
                {(ctx) => {
                    return (
                        <>
                            <CourseInput onAddGoal={onAddGoal} />

                            <div>{goalContent} </div>

                            {/* <pre>{JSON.stringify(goals)}</pre> */}
                            <pre>Islogged in via Authcontext = {ctx.myContextValue}</pre>

                        </>
                    )
                }}




            </AuthContext.Consumer>

        </>
    )
}