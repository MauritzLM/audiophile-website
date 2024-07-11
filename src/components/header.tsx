import { Link } from "react-router-dom"
import Categories from "./products/categories"
import { useState } from "react"
import { item } from "../types"

interface headerProps {
   handleViewCart: () => void,
   cart: item[]
}

function Header({ handleViewCart, cart }: headerProps) {
   const [showNav, setShowNav] = useState(false)
   return (
      <>
         <header id="cs-navigation" className={showNav ? "cs-active" : ""}>
            <nav>
               {/* Mobile Nav Toggle */}
               <button className={showNav ? "cs-toggle cs-active" : "cs-toggle"} aria-label="mobile menu toggle" onClick={() => showNav ? setShowNav(false) : setShowNav(true)}>
                  <div className="cs-box" aria-hidden="true">
                     <span className="cs-line cs-line1" aria-hidden="true"></span>
                     <span className="cs-line cs-line2" aria-hidden="true"></span>
                     <span className="cs-line cs-line3" aria-hidden="true"></span>
                  </div>
               </button>

               {/* logo */}
               <Link to="/">
                  <img src="/svgs/logo.svg" alt="logo" width="143px" height="25px" decoding="async" loading="eager" />
               </Link>

               {/* categories component for mobile nav */}
               <div onClick={() => setShowNav(false)} className="nav-links-wrapper">
                  <Categories />

                  {/* desktop links */}
                  <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/headphones">headphones</Link></li>
                     <li><Link to="/speakers">speakers</Link></li>
                     <li><Link to="/earphones">earphones</Link></li>
                  </ul>
               </div>

               {/* cart notification  and display button */}
               <div className="cart-button">
                  <div className={cart?.length ? "notification" : "hidden"}>{cart?.length}</div>
                  <button data-testid="view-cart" aria-label="cart" onClick={handleViewCart}><img src="/svgs/icon-cart.svg" alt="cart" aria-hidden="true" decoding="async" loading="lazy" /></button>
               </div>
            </nav>
         </header>
      </>
   )
}

export default Header