import { MainButton } from "../button/mainButton"
import "./helpStyle.scss"

export const Help =()=>{
    return(
        <section className="help">
            <div className="helpHeader">
                <h2 className="helpTitle">An easy process to make some order</h2>
                <MainButton title="Contact Us &#8594;"/>
            </div>
            <ul className="helpList">
                <li>
                    <img src="#" alt="#" width="411px" height="411px"/>
                    <div> 
                        <h3>Get started</h3>
                        <p>Send us the items you want, and we send you a quotation. We also personalize packages and products.</p>
                        <MainButton title="Create Account &#8594;" /> 
                    </div>
                   
                </li>
                <li>
                    <img src="#" alt="#" width="411px" height="411px"/>
                    <div> 
                        <h3>Get started</h3>
                        <p>Send us the items you want, and we send you a quotation. We also personalize packages and products.</p>
                        <MainButton title="Create Account &#8594;" /> 
                    </div>
                   
                </li>
                <li>
                    <img src="#" alt="#" width="411px" height="411px"/>
                    <div> 
                        <h3>Get started</h3>
                        <p>Send us the items you want, and we send you a quotation. We also personalize packages and products.</p>
                        <MainButton title="Create Account &#8594;" /> 
                    </div>
                   
                </li>
                <li>
                    <img src="#" alt="#" width="411px" height="411px"/>
                    <div> 
                        <h3>Get started</h3>
                        <p>Send us the items you want, and we send you a quotation. We also personalize packages and products.</p>
                        <MainButton title="Create Account &#8594;" /> 
                    </div>
                   
                </li>
            </ul>
        </section>
    )
}