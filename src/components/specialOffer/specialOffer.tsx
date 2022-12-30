import { MainButton } from "../button/mainButton"
import { OfferAdvantages } from "./specialOfferBenefits/specialOfferBenefits"
import { SpecialOfferList } from "./specialOfferList/specialOfferList"
import "./specialOfferStyles.scss"

export const SpecialOffer = () => {

    return (
        <section className="specialOffer">
            <h2 className="specialOfferTitle">We have special offer</h2>
            <p className="specialOfferText">SPSS is designed to be used by every people. Try our standard plans for normal delivery, and get more benefit with cash on delivery</p>
            <SpecialOfferList/>
            <OfferAdvantages />
            <p className="specialOfferDescription">This all inclusive fulfillment cost (Includes shipping, warehouse and packaging)</p>
            <MainButton title="More about pricing &#8594;" theme="transparentButton" />
        </section>
    )
}