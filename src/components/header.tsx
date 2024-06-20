import { Link } from "react-router-dom"

interface headerProps {
   handleViewCart: () => void
}

function Header({ handleViewCart }: headerProps) {
   return (
      <>
         <header>
            <nav>
               {/* categories component for mobile nav* */}

               {/* desktop links */}
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/headphones">headphones</Link></li>
                  <li><Link to="/speakers">speakers</Link></li>
                  <li><Link to="/earphones">earphones</Link></li>
               </ul>
               {/* cart display button* */}
               <button aria-label="cart" onClick={handleViewCart}><img src="/src/assets/svgs/icon-cart.svg" alt="cart" aria-hidden="true" decoding="async" loading="lazy" /></button>
            </nav>
         </header>
      </>
   )
}

export default Header