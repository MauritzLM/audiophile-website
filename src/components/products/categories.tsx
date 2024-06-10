import { Link } from "react-router-dom"

function Categories() { 

    // uses images of new products*

    return (
        <>
          <div>
                <p>headphones</p>
                <Link to="/headphones">Shop</Link>
            </div>
            <div>
                <p>speakers</p>
                <Link to="/speakers">Shop</Link>
            </div>
            <div>
                <p>earphones</p>
                <Link to="/earphones">Shop</Link>
            </div>
        </>
    )
}

export default Categories