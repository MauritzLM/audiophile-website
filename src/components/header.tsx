import { Link } from "react-router-dom"

function Header() {
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
                   <li><Link to="/checkout">checkout</Link></li>
                </ul>
                {/* cart display button* */}
             </nav>
          </header>
        </>
    )
}

export default Header