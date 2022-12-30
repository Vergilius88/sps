import { Link } from "react-router-dom"
import {routes} from "../../assets/routes"
import "./navStyles.scss"





export const Nav = () => {
    return (
        <nav className="navigation">
            <Link className="navigationLink" to={routes.home}> Home</Link>
            <Link className="navigationLink" to={routes.aboutUs}> About Us</Link>
            <Link className="navigationLink" to={routes.seller}> Best Seller</Link>
            <Link className="navigationLink" to={routes.pricing}> Pricing</Link>
            <Link className="navigationLink" to={routes.research}> Research</Link>
            <Link className="navigationLink" to={routes.service}> Service</Link>
            <Link className="navigationLink" to={routes.contactUs}> Contact Us</Link>
        </nav>
    )
}