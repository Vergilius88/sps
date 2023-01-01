import { MainButton } from "../button/mainButton"
import "./heroStyles.scss"

export const Hero = () => {
    return (
        <section className="hero">
            <h1 className="heroTitle">We search package and
                ship your products</h1>
            <p className="heroText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <MainButton title="Contact Us  &#8594;" theme="transparentButton" />
        </section>
    )
}