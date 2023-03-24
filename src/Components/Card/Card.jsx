

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        // props.children automatically comes to the component. It is basically a slot
        <>
            <div className={classes}>
                {props.children}
            </div>
        </>
    )

}

export default Card;


function ComponentUsingCard() {
    return (
        <>

            <Card>
                <h1>sdlfkjds</h1>
                <h2>dflkjsdff</h2>
                <p>sldfkjsdfl</p>
            </Card>
            <Card className='someClass'>
                <p>sdlfkjsdf</p>
            </Card>

        </>
    )
}