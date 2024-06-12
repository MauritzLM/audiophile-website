import { item } from "../../types";

interface productFeaturesProps {
    product: item
}

function ProductFeatures({ product }: productFeaturesProps) {
    return (
        <>
            <h2>Features</h2>
            <p data-testid="description">{product.description}</p>

            {/* in the box */}
            <ul>
                {product.includes.map((item, index) => {
                    return <li key={`includes-${index}`}><span>{item.quantity}x</span> <span>{item.item}</span></li>
                })}
            </ul>

            {/* images */}
            <div>
                <picture data-testid="picture">
                    <source media="(max-width: 700px)" srcSet={`/src/${product.gallery.first.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`/src/${product.gallery.first.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`/src/${product.gallery.first.desktop}`} />
                    <img src={`/src/${product.gallery.first.desktop}`} alt="building" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>
                <picture data-testid="picture">
                    <source media="(max-width: 700px)" srcSet={`/src/${product.gallery.second.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`/src/${product.gallery.second.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`/src/${product.gallery.second.desktop}`} />
                    <img src={`/src/${product.gallery.first.desktop}`} alt="building" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>
                <picture data-testid="picture">
                    <source media="(max-width: 700px)" srcSet={`/src/${product.gallery.third.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`/src/${product.gallery.third.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`/src/${product.gallery.third.desktop}`} />
                    <img src={`/src/${product.gallery.first.desktop}`} alt="building" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>
            </div>
        </>
    )
}

export default ProductFeatures