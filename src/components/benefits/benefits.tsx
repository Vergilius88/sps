import { BenefitsList } from "./benefitsList/benefitsList"
import "./benefitsStyles.scss"

export const Benefits = () => {
    return (
        <section className="benefits">
            <h2 className="benefitsTitle">We have a bunch of benefit</h2>
            <p className="benefitsText">For every member who becomes part of our company, we always provide many benefits that will help each member, including some of these things</p>
            <BenefitsList />
        </section>
    )
}