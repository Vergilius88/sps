import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { Header } from "../../layouts/header/header"
import { Main } from "../../layouts/main/main"

export const BestSeller =()=>{
    return(
        <>
            <Header/>
            <Main>
               <OrderNowBlock/>
            </Main>
        </>
    )
}