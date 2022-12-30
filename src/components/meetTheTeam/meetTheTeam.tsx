import { MainButton } from "../button/mainButton"
import { MeetTheTeamItem } from "./meetTheTeamItem/meetTheTeamItem"
import "./meetTheTeamStyles.scss"

const testData = [{
    name: "David Acting",
    position: "CEO & Founder"
}, {
    name: "Neuron Mitchell",
    position: "Co-Founder "
}, {
    name: "Adrian Never",
    position: "CTO"
}, {
    name: "Saka Albrighton",
    position: "COO"
}, {
    name: "Gabriel Batistuta",
    position: "CMO"
}, {
    name: "Alfred Butkinson",
    position: "Senior UI/UX Designer"
}, {
    name: "Natasha Mila",
    position: "Senior Front-End Developer"
}, {
    name: "Angelina",
    position: "Junior Front-End Developer"
}]

export const MeetTheTeam = () => {
    return (
        <section className="meetTheTeam">
            <h3 className="meetTheTeamTitle">Meet our team</h3>
            <p className="meetTheTeamDescription">Our team is full of creative people who always think beyond your common sense! The work we produce is always based on ideas trapped in our brains</p>
            <ul className="meetTheTeamList">
                {testData.map(item => <MeetTheTeamItem name={item.name} position={item.position} />)}
            </ul>
            <MainButton title="Join Our Team &#8594;"/>
        </section>
    )
}