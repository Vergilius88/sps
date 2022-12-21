import { Link } from "react-router-dom"
import "./footerStyles.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerListsAndFeedback">
                <div className="feedback">
                    <h3>Always give the best result for every order we have!</h3>
                    <form action="">
                        <input type="email" name="feedback" placeholder="E-mail" />
                        <button>&#8594;</button>
                    </form>
                </div>
                <div className="footerNavigationWrapper">
                    <h3>Company</h3>
                    <nav className="footerNavigation">
                        <Link className="navigationLink" to="/"> About Us</Link>
                        <Link className="navigationLink" to="/"> Pricing</Link>
                        <Link className="navigationLink" to="/"> Contact Us</Link>
                        <Link className="navigationLink" to="/"> Best Sellers</Link>
                        <Link className="navigationLink" to="/"> Product research</Link>
                    </nav>
                </div>
                <div className="footerServiceList">
                    <h3>Service</h3>
                    <ul>
                        <li><a href="#">Complete Service</a></li>
                        <li><a href="#">Your Goods to Our Warehouse</a></li>
                        <li><a href="#">Our Goods to Your warehouse</a></li>
                    </ul>
                </div>
                <div className="footerOurPlace">
                    <h3>Our Place</h3>
                    <ul>
                        <li><a href="#">4517 Washington Ave. Manchester, Kentucky 39495</a></li>
                        <li><a href="#">+1 (912) 2819 2837</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyrightsAndSocialNetworks">
                <ul className="socialNetworksLink">
                    <li>instagram</li>
                    <li>facebook</li>
                    <li>twitter</li>
                </ul>
                <p className="copyright">© SPS Fulfillments.Inc || All Right Reserved</p>
            </div>
        </footer>
    )
}