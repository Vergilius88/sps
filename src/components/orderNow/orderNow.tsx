import { MainButton } from "../button/mainButton"
import "./orderNowStyles.scss"

export const OrderNowBlock = () => {
    return (
        <section className="orderNowBlock">
            <h2>So, what are you waiting for now? Let’s be part of us now</h2>
            <p>Become a part of us now and get various kinds of
                benefits from what we have</p>
            <MainButton title="Order Now &#8594;"/>
            <span className="line"></span>
        </section >
    )
} 