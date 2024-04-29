import React from "react"
import { Link } from 'react-router-dom'
import "./Home.css"
import logo from"../../assets/shared/logo.svg"




const Home = () => {
    return(
        <section className="main">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="space logo" />
                </div>
                <div className="line"></div>
                <nav className="nav">
                    <ul className="navbar-nav">
                        <li className="nav-items">
                            <Link to="/"><span className="bold">00</span> Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="destination"><span className="bold">01</span> Destination</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="crew"><span className="bold">02</span> Crew</Link>
                        </li>
                        <li className="nav-items">
                            <Link to="technology"><span className="bold">03</span> Technology</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <section className="body-text">
                <div className="message-body">
                    <div className="text-message">
                        <h3 className="travel-text">SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 className="space-text">SPACE</h1>
                        <p className="txt">
                            Let's face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we'll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="explore-text">
                        <p className="txt-exp">EXPLORE</p>
                    </div>
                </div>

            </section>
        </section>
    )
}
export default Home