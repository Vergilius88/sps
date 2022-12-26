import "./specialOfferBenefitsStyles.scss"

const testData = ["No monthly warehouse fees", "Low shipping cost", "7/7 personal assistance", "Searching the ideal product for the lowest price", "Personalizing package and product", "Sales assistance"]

export const OfferAdvantages = () => {
    return (
        <div className="specialOfferAdvantages">
            <h3>Benefits</h3>
            <ul>
                {testData.map(item =>
                    <li>
                        <div className="icon">
                            <span>&#10003;</span></div>
                        <p>{item}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}  