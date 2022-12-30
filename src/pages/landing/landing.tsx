import { Benefits } from "../../components/benefits/benefits"
import { Help } from "../../components/help/help"
import { Hero } from "../../components/hero/hero"
import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { Reviews } from "../../components/reviews/reviews"
import { SpecialOffer } from "../../components/specialOffer/specialOffer"


export const Landing = () => {
    return (
        <>
            <Hero />
            <Benefits />
            <Help />
            <SpecialOffer />
            <Reviews />
            <OrderNowBlock />
        </>
    )
}