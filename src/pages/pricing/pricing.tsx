import { AdditionalCost } from "../../components/additionalCost/additionalCost"
import { DeliveryMap } from "../../components/deliveryMap/deliveryMap"
import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { SpecialOffer } from "../../components/specialOffer/specialOffer"
import { Header } from "../../layouts/header/header"
import { Main } from "../../layouts/main/main"

const testData = {
    title:"Different plans for different needs",
    text:"SPSS is designed to be used by every people. Try our standard plans for normal delivery, and get more benefit with cash on delivery"
    }

export const Pricing = () => {
    return (
        <>
            <Header theme="whiteStyle" />
            <Main>
                <SpecialOffer title={testData.title} text={testData.text} theme="withHeaderStyle"/>
                <AdditionalCost/>
                <DeliveryMap/>
                <OrderNowBlock />
            </Main>
        </>
    )
}