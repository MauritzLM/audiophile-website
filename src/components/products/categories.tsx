import { Link } from "react-router-dom"

function Categories() {

    // uses images of new products*

    return (
        <>
            <div data-testid="category-link">
                <img src="/src/assets/images/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                <p>headphones</p>
                <Link to="/headphones">Shop</Link>
            </div>
            <div data-testid="category-link">
                <img src="/src/assets/images/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                <p>speakers</p>
                <Link to="/speakers">Shop</Link>
            </div>
            <div data-testid="category-link">
                <img src="/src/assets/images/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                <p>earphones</p>
                <Link to="/earphones">Shop</Link>
            </div>
        </>
    )
}

export default Categories