import { Dispositions } from "../../components/dispositions/dispositions"
import { MeetTheTeam } from "../../components/meetTheTeam/meetTheTeam"
import { OrderNowBlock } from "../../components/orderNow/orderNow"
import { OurMission } from "../../components/ourMission/ourMission"
import { Header } from "../../layouts/header/header"
import { Main } from "../../layouts/main/main"

export const AboutUs = () => {
    return (
        <>
            <Header/>
            <Main>
                <OurMission/>
                <MeetTheTeam />
                <Dispositions/>
                <OrderNowBlock />
            </Main>
        </>
    )
}