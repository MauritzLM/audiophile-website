
import { item } from "../../types"
import QuantityInput from "../quantityInput"

interface productCardFullProps {
    product: item,
    addToCart: (product: item, quantity: number) => void
}

function ProductCardFull({ product, addToCart }: productCardFullProps) {

    return (
        <>
            {/* prodcut image */}
            <div className="product-card">
                <picture>
                    <source media="(max-width: 700px)" srcSet={`${product?.image.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`${product?.image.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`${product?.image.desktop}`} />
                    <img src={`${product?.image.desktop}`} alt={product?.category} aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>

                {/* new? */}
                <div className="product-details">
                    {product?.new ? <p className="new" data-testid="new">new product</p> : ''}

                    {/* name */}
                    <h1>{product?.name}</h1>

                    {/* description */}
                    <p className="description">{product?.description}</p>

                    {/* price */}
                    <p className="price" data-testid="price">$ {product?.price}</p>

                    {/* add to cart button && quantity input component */}
                    <QuantityInput product={product} addToCart={addToCart} />
                </div>
            </div>
        </>
    )
}

export default ProductCardFull