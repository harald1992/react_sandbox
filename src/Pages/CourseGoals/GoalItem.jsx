import styles from './GoalItem.module.css';


const GoalItem = props => {

    return (
        <p className={styles['goal-item']} onClick={() => props.deleteItem(props.goal)}>{props.goal.text}</p>
    )
}

export default GoalItem;