import { Benefits } from "../../components/benefits/benefits"
import { Help } from "../../components/help/help"
import { Hero } from "../../components/hero/hero"
import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { Reviews } from "../../components/reviews/reviews"
import { SpecialOffer } from "../../components/specialOffer/specialOffer"
import { Header } from "../../layouts/header/header"
import { Main } from "../../layouts/main/main"


const testData = {
title:"We have special offer",
text:"SPSS is designed to be used by every people. Try our standard plans for normal delivery, and get more benefit with cash on delivery"
}

export const Landing = () => {
    return (
        <>
            <Header theme="whiteStyle" />
            <Main>
                <Hero />
                <Benefits />
                <Help />
                <SpecialOffer title={testData.title} text={testData.text}/>
                <Reviews />
                <OrderNowBlock />
            </Main>
        </>
    )
}