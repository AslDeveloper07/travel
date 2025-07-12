import { Logo } from "../assets/assets"
import { NavItem } from "./data"
import Button from "./UI/Button"

import './pages.css'
import { AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container">
      <div className="navLogo">
        <img src={Logo} alt="this is logo" />
      <span>TravelWorld </span>
      </div>

      <div className="NavItem">
        <ul className="NavList">
          {
            NavItem.map((item, inx)=><li key={inx}>
              {item}
            </li>)
          }
        </ul>
        <Button name={"Book Now"}/>
      </div>
      <div className="burger hidden">
       <AiOutlineMenu />
      </div>
    </nav>
    </header>
  )
}

export default Navbar
