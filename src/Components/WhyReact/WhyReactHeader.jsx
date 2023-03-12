import './WhyReact.css'
import logo from '../../Assets/logo.svg';


export default function WhyReactHeader() {
    return (
        <>
            <header>
                <nav className="nav">
                    <img src={logo} alt="" />
                    <ol className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ol>
                </nav>
            </header>
        </>
    )
}