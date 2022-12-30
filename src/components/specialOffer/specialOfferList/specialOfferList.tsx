import { SpecialOfferListItem } from "./specialOfferListItem/specialOfferListItem"
import "./specialOfferListStyles.scss"

export const SpecialOfferList = () => {
    return (
        <ul className="specialOfferList">
            <SpecialOfferListItem />
            <SpecialOfferListItem />
        </ul>
    )
}