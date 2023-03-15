import './WhyReact.css'
import logo from '../../Assets/logo.svg';
import WhyReactHeader from './WhyReactHeader';

function Footer() {
    return (
        <>
            <p style={{ backgroundColor: 'grey' }}>Copyright</p>
        </>
    )
}

function WhyReact() {
    return (
        <>
            <WhyReactHeader />
            <h1>Why I am excited to learn React</h1>
            <ol>
                <li>It helps to get new projects</li>
                <li>programming is fun</li>
                <li>I can talk to other devs about it</li>
            </ol>
            <Footer></Footer>
        </>
    )
}

export default WhyReact;