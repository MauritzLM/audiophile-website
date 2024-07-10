import { item } from "../../types";

interface productFeaturesProps {
    product: item
}

function ProductFeatures({ product }: productFeaturesProps) {

    // format features text
    const featuresArr = product?.features.split("\\n")

    return (
        <>
            <section className="product-features">
                <div className="description">
                    <h2>Features</h2>
                    <p data-testid="description">{featuresArr ? featuresArr[0] : ""}</p>
                    <p>{featuresArr ? featuresArr[featuresArr.length - 1] : ""}</p>
                </div>

                {/* in the box */}
                <div className="box">
                    <h2>In the box</h2>
                    <ul>
                        {product?.includes.map((item, index) => {
                            return <li key={`includes-${index}`}><span>{item.quantity}x</span> <span>{item.item}</span></li>
                        })}
                    </ul>
                </div>

                {/* images */}
                <div className="gallery">
                    <picture data-testid="picture">
                        <source media="(max-width: 700px)" srcSet={`${product?.gallery.first.mobile}`} />
                        <source media="(max-width: 1000px)" srcSet={`${product?.gallery.first.tablet}`} />
                        <source media="(min-width: 1001px)" srcSet={`${product?.gallery.first.desktop}`} />
                        <img src={`${product?.gallery.first.desktop}`} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                    </picture>
                    <picture data-testid="picture">
                        <source media="(max-width: 700px)" srcSet={`${product?.gallery.second.mobile}`} />
                        <source media="(max-width: 1000px)" srcSet={`${product?.gallery.second.tablet}`} />
                        <source media="(min-width: 1001px)" srcSet={`${product?.gallery.second.desktop}`} />
                        <img src={`${product?.gallery.first.desktop}`} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                    </picture>
                    <picture data-testid="picture">
                        <source media="(max-width: 700px)" srcSet={`${product?.gallery.third.mobile}`} />
                        <source media="(max-width: 1000px)" srcSet={`${product?.gallery.third.tablet}`} />
                        <source media="(min-width: 1001px)" srcSet={`${product?.gallery.third.desktop}`} />
                        <img src={`${product?.gallery.first.desktop}`} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                    </picture>
                </div>
            </section>
        </>
    )
}

export default ProductFeatures