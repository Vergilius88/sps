import { AdditionalCostItem } from "./additionalCostItem/additionalCostItem"
import "./additionalCostListStyles.scss"

const testData = [
    {
        title: "Shipping Cost",
        text: "In every product order that you place, there will be a shipping fee that we have. Take it easy, the shipping costs that we provide are cheaper than anywhere",
        price: 1.99
    },
    {
        title: "Handling Fees",
        text: "In every product order that you place, there will also be a handling fee that we provide, a handling fee that we provide is flat",
        price: 2.99
    }
]


export const AdditionalCost = () => {
    return (
        <section className="additionalCost">
            <ul className="additionalCostList">
                {testData.map((item, index) => <AdditionalCostItem key={index} cost={item.price} text={item.text} title={item.title} />)}
            </ul>
        </section>
    )
}