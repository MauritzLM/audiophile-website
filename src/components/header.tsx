import { Link } from "react-router-dom"

function Header() {
    return (
        <>
          <header>
             <nav>
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/headphones">headphones</Link></li>
                   <li><Link to="/speakers">speakers</Link></li>
                   <li><Link to="/earphones">earphones</Link></li>
                   <li><Link to="/checkout">checkout</Link></li>
                </ul>
             </nav>
          </header>
        </>
    )
}

export default Header