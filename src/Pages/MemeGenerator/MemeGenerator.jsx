import trollface from '../../Assets/Troll Face.svg';
import styles from './MemeGenerator.module.css';
import MemeGeneratorForm from './MemeGeneratorForm';


export default function MemeGenerator() {
    return (
        <>
            <nav className={styles.nav}>
                <div> <img src={trollface} alt="" />Meme Generator</div>
                <div>React Course - Project 3</div>
            </nav>
            <main className={styles.main}>
                <MemeGeneratorForm />

            </main>
        </>

    )
}