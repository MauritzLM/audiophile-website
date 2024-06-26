import { Link } from "react-router-dom"
import "/src/assets/sass/components/categories.scss"

function Categories() {

    return (
        <>
            <div className="categories">
                <div className="category" data-testid="category-link">
                    <img className="category-image" src="/src/assets/images/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>headphones</p>
                    <Link to="/headphones">Shop <img src="/src/assets/svgs/icon-arrow-right.svg" alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></Link>
                </div>
                <div className="category" data-testid="category-link">
                    <img className="category-image" src="/src/assets/images/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>speakers</p>
                    <Link to="/speakers">Shop <img src="/src/assets/svgs/icon-arrow-right.svg" alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></Link>
                </div>
                <div className="category" data-testid="category-link">
                    <img className="category-image" src="/src/assets/images/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>earphones</p>
                    <Link to="/earphones">Shop <img src="/src/assets/svgs/icon-arrow-right.svg" alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></Link>
                </div>
            </div>
        </>
    )
}

export default Categories