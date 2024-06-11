import { Link } from "react-router-dom"

function Categories() {

    // uses images of new products*

    return (
        <>
            <div data-testid="category-link">
                <p>headphones</p>
                <Link to="/headphones">Shop</Link>
            </div>
            <div data-testid="category-link">
                <p>speakers</p>
                <Link to="/speakers">Shop</Link>
            </div>
            <div data-testid="category-link">
                <p>earphones</p>
                <Link to="/earphones">Shop</Link>
            </div>
        </>
    )
}

export default Categories