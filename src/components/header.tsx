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
               <button onClick={handleViewCart}></button>
            </nav>
         </header>
      </>
   )
}

export default Header