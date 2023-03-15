import styles from './MemeGenerator.module.css';
import logo from '../../Assets/logo.svg';
import { useEffect, useState } from 'react';
// import memesData from './memesData';
import MemeGeneratorButton from './MemeGeneratorButton';

export default function MemeGeneratorForm() {
    const [imgHover, setImgHover] = useState(false);
    const [allMemes, setAllMemes] = useState(undefined);

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        url: "https://i.imgflip.com/30b1gx.jpg",
        width: "500px",
        height: "500px",

    });

    const [state, setState] = useState({
        comments: "",
        isDone: false,
        employment: 'parttime',
        favColor: 'blue',
    })


    function handleStateForm(e) {
        const { name, value, type, checked } = e.target;

        setState(previousValue => {
            return {
                ...previousValue,
                [name]: type === 'checkbox' ? checked : value,
            }
        });
    }

    useEffect(() => {
        getNewMeme();
    }, []);

    function getNewMeme() {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                const memes = data.data.memes;
                setAllMemes(memes);

                const randomInt = Math.floor(Math.random() * memes.length);
                const newMeme = memes[randomInt];

                setMeme(prevMeme => ({
                    ...prevMeme,
                    url: newMeme.url,
                    width: newMeme.width,
                    height: newMeme.height
                }));
            });

        return () => {
            // cleanup side effects here if you had a window.addEventListener or smth
        }
        // setMeme(previousValue => previousValue + 1); // when you want to reuse the previous value 
    }

    function handleForm(e) {
        const { name, value, type, checked } = e.target;

        setMeme(previousValue => {
            return {
                ...previousValue,
                [name]: type === 'checkbox' ? checked : value,
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // fetch
    }

    return (
        <>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input type="text" placeholder='top text' name="topText" onChange={handleForm} value={meme.topText} />
                <input type="text" placeholder='bottom text' name="bottomText" onChange={handleForm} value={meme.bottomText} />
                <button type="submit">Submit</button>
            </form>
            <MemeGeneratorButton handleClick={getNewMeme}>Get a new meme image</MemeGeneratorButton>


            {allMemes && meme && <div className={styles.memeContainer}>
                <img src={meme.url} alt="" width={meme.width} height={meme.height}
                    className={imgHover ? styles.imgHover : null}
                    onMouseEnter={() => setImgHover(true)}
                    onMouseLeave={() => setImgHover(false)}
                />
                <div className={styles.topText}>{meme.topText}</div>
                <div className={styles.bottomText}>{meme.bottomText}</div>
            </div>
            }


            <hr />
            <div className="flex-row">
                <textarea value={state.comments} onChange={handleStateForm} name="comments"></textarea>
                <p>{state.comments}</p>
            </div>

            <div className="flex-row align-center">
                <input type="checkbox" id="isDone" name="isDone" onChange={handleStateForm} checked={state.isDone} />
                <label htmlFor="isDone">Is done?</label>
                <p>{state.isDone ? 'true' : 'false'}</p>
            </div>

            <input type="radio" name="employment" id="unemployed" value="unemployed" onChange={handleStateForm} checked={state.employment === 'unemployed'} />
            <label htmlFor="unemployed">Unemployed</label>
            <br />
            <input type="radio" name="employment" id="parttime" value="parttime" onChange={handleStateForm} checked={state.employment === 'parttime'} />
            <label htmlFor="parttime">parttime</label>
            <br />
            <input type="radio" name="employment" id="fulltime" value="fulltime" onChange={handleStateForm} checked={state.employment === 'fulltime'} />
            <label htmlFor="fulltime">fulltime</label>
            <br />
            <p>{state.employment}</p>
            <hr />

            <label htmlFor="favColor"></label>
            <select name="favColor" id="favColor" value={state.valColor} onChange={handleStateForm} >
                <option value="red" selected={state.favColor === 'red'}>Red</option>
                <option value="blue" selected={state.favColor === 'blue'}>Blue</option>
                <option value="purple" selected={state.favColor === 'purple'}>Purple</option>
            </select>
            <p>{state.favColor}</p>
        </>

    )
}