import { Benefits } from "../../components/benefits/benefits"
import { Help } from "../../components/help/help"
import { Hero } from "../../components/hero/hero"
import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { Reviews } from "../../components/reviews/reviews"
import { SpecialOffer } from "../../components/specialOffer/specialOffer"
import { Header } from "../../layouts/header/header"
import { Main } from "../../layouts/main/main"


export const Landing = () => {
    return (
        <>
            <Header theme="whiteStyle" />
            <Main>
                <Hero />
                <Benefits />
                <Help />
                <SpecialOffer />
                <Reviews />
                <OrderNowBlock />
            </Main>
        </>
    )
}