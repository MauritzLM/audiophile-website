
import { item } from "../../types"
import QuantityInput from "../quantityInput"

interface productCardFullProps {
    product: item,
    updateCart: (product: item, quantity: number) => void
}

function ProductCardFull({ product, updateCart }: productCardFullProps) {

    return (
        <>
            {/* prodcut image */}
            <picture>
                <source media="(max-width: 700px)" srcSet={`/src/${product.image.mobile}`} />
                <source media="(max-width: 1000px)" srcSet={`/src/${product.image.tablet}`} />
                <source media="(min-width: 1001px)" srcSet={`/src/${product.image.desktop}`} />
                <img src={`/src/${product.image.desktop}`} alt={product.category} aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
            </picture>

            {/* new? */}
            {product.new ? <p data-testid="new">new product</p> : ''}

            {/* name */}
            <h2>{product.name}</h2>

            {/* description */}
            <p>{product.description}</p>

            {/* price */}
            <p data-testid="price">$ {product.price}</p>

            {/* add to cart button && quantity input component */}
            <QuantityInput product={product} updateCart={updateCart}/>
        </>
    )
}

export default ProductCardFull