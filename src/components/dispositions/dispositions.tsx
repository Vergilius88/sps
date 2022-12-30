import { MainButton } from "../button/mainButton"
import "./dispositionsStyles.scss"

export const Dispositions =()=>{
    return(
        <section className="dispositions">
            <div className="dispositionsImage"></div>
            <div className="dispositionsContent">
                <h2 className="dispositionsTitle">We have an awesome future plans that will make you more easier to delivery product</h2>
                <p className="dispositionsText">In the future we plan to expand to more regions, opening more warehouses in different locations, does making it possible for our customers to sell globally. In addition, we will release an updated website soon, with a personal dashboard for every client, and much more. We hope to grow together with our clients to make your experience better day by day. We continuosly innovate and keep up with the technoloy. </p>
                <MainButton title="Send Feedback &#8594;"/>
            </div>
        </section>
    )
}