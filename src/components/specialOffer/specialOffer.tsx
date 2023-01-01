import { MainButton } from "../button/mainButton"
import { OfferAdvantages } from "./specialOfferBenefits/specialOfferBenefits"
import { SpecialOfferList } from "./specialOfferList/specialOfferList"
import "./specialOfferStyles.scss"

interface Props {
    title: string;
    text: string;
    theme?:string
}

export const SpecialOffer = ({title, text, theme}:Props) => {

    return (
        <section className={`specialOffer ${theme}`}>
            <h2 className="specialOfferTitle">{title}</h2>
            <p className="specialOfferText">{text}</p>
            <SpecialOfferList/>
            <OfferAdvantages />
            <p className="specialOfferDescription">This all inclusive fulfillment cost (Includes shipping, warehouse and packaging)</p>
            <MainButton title="More about pricing &#8594;" theme="transparentButton" />
        </section>
    )
}