

export default function MemeGeneratorButton({ handleClick }) {
    return (
        <>
            <br />
            <button className="btn" onClick={handleClick} type="button">Get a new meme image</button>
            <br />
        </>
    );

}