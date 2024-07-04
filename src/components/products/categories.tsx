import { Link } from "react-router-dom"
import { getImageURL } from "../../utils/image-util"
import "/src/assets/sass/components/categories.scss"

function Categories() {

    return (
        <>
            <div className="categories">
                <Link to="/headphones" className="category" data-testid="category-link">
                    <img className="category-image" src={getImageURL("/src/assets/images/shared/desktop/image-category-thumbnail-headphones.png")} alt="headphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>headphones</p>
                    <span>Shop <img src={getImageURL("/src/assets/svgs/icon-arrow-right.svg")} alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></span>
                </Link>

                <Link to="/speakers" className="category" data-testid="category-link">
                    <img className="category-image" src={getImageURL("/src/assets/images/shared/desktop/image-category-thumbnail-speakers.png")} alt="speakers" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>speakers</p>
                    <span>Shop <img src={getImageURL("/src/assets/svgs/icon-arrow-right.svg")} alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></span>
                </Link>

                <Link to="/earphones" className="category" data-testid="category-link">
                    <img className="category-image" src={getImageURL("/src/assets/images/shared/desktop/image-category-thumbnail-earphones.png")} alt="earphones" height="" width="" loading="lazy" decoding="async" aria-hidden="true" />
                    <p>earphones</p>
                    <span>Shop <img src={getImageURL("/src/assets/svgs/icon-arrow-right.svg")} alt="" aria-hidden="true" decoding="async" loading="lazy" height="10px" width="5px" /></span>
                </Link>
            </div>
        </>
    )
}

export default Categories