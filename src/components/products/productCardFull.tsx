
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
                    <source media="(max-width: 700px)" srcSet={`/src/${product?.image.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`/src/${product?.image.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`/src/${product?.image.desktop}`} />
                    <img src={`/src/${product?.image.desktop}`} alt={product?.category} aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>

                {/* new? */}
                {product?.new ? <p className="new" data-testid="new">new product</p> : ''}

                {/* name */}
                <h2>{product?.name}</h2>

                {/* description */}
                <p className="description">{product?.description}</p>

                {/* price */}
                <p className="price" data-testid="price">$ {product?.price}</p>

                {/* add to cart button && quantity input component */}
                <QuantityInput product={product} addToCart={addToCart} />
            </div>
        </>
    )
}

export default ProductCardFull