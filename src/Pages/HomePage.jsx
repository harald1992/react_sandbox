import styles from "./HomePage.module.css";
import Agenda from "./Agenda/Agenda";


export const HomePage = () => {
    const title = "Homepage";


    return (
        <div>

            <h1>{title}</h1>
            <br />
            <Agenda></Agenda>
        </div>
    );
};
