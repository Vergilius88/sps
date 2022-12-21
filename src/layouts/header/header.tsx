import { MainButton } from "../../components/button/mainButton"
import { Nav } from "../nav/nav"

import "./headerStyles.scss"

interface Props{
  theme?: string
}

export const Header =({theme}:Props)=>{
    return(
        <header className={ `header ${theme}`}>
          <p className="logo">SPS Fulfillments</p>
          <Nav/>
          <MainButton title="Order Now &#8594;" theme="navButton"/>
        </header>
    )
}