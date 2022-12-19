import { Link } from "react-router-dom"

import "./header.scss"

export const Header =()=>{
    return(
        <header className="header">
          <p className="logo">SPS Fulfillments</p>
          <nav className="navigation">
            <Link className="navigationLink" to="/"> Home</Link>
            <Link className="navigationLink" to="/"> About Us</Link>
            <Link className="navigationLink" to="/"> Best Seller</Link>
            <Link className="navigationLink" to="/"> Pricing</Link>     
            <Link className="navigationLink" to="/"> Research</Link>
            <Link className="navigationLink" to="/"> Service</Link>
            <Link className="navigationLink" to="/"> Contact Us</Link>
          </nav>
          <button className="navigationButton">Order Now 	&#8594;</button>
        </header>
    )
}