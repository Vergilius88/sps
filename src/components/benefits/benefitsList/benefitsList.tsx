import { BenefitsListItems } from "./benefitsItem/benefitsItem"
import "./benefitsListStyles.scss"

const testData = [
    {
        title: "48 hour delivery from our warehouse",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Veniam consequat sunt nostrud amet.",
        link: "#"
    }, {
        title: "Title for your card will be here",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Veniam consequat sunt nostrud amet.",
        link: "#"
    }, {
        title: "We offer cash on delivery",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Veniam consequat sunt nostrud amet.",
        link: "#"
    }, {
        title: "No MOQ (No Minimum Order Quantity)",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Veniam consequat sunt nostrud amet.",
        link: "#"
    }
]
export const BenefitsList = () => {
    return (
        <ul className="benefitsList">
            {testData.map(item => <BenefitsListItems title={item.title} text={item.text} link={item.link} />)}
        </ul>
    )
}