
import "./specialOfferListItemStyles.scss"

export const SpecialOfferListItem = () => {
    return (
        <li className="specialOfferListItem">
            <img src="#" alt="#" width="48px" height="48px" />
            <h3 className="specialOfferListItemTitle">Normal Delivery</h3>
            <p className="specialOfferListItemDescription">Buy a product and pay it when the product is already arrived at your house</p>
            <div className="specialOfferListItemDelivering">
                <div className="icon">
                    <span>&#10003;</span>
                </div>
                <p>48H Shipping</p>
            </div>
            <span className="line"></span>
            <div className="specialOfferListItemPriseWrapper">
                <p>Starting at</p>
                <span> €7,99</span>
            </div>
        </li>
    )
}