import { Link } from "react-router-dom"
import { item } from "../../types"
import "/src/assets/sass/components/otherProducts.scss"

interface otherProductProps {
  product: item
}

function OtherProducts({ product }: otherProductProps) {

  return (
    <>
      <div className="other-products">
        <h2>You may also like</h2>
        <div className="container">
          {product?.others.map((item, index) => {
            return <div data-testid="other-product" key={`other-${index}`}>
              <picture>
                {/* fix image links in db* */}
                <source media="(max-width: 700px)" srcSet={`${item.image.mobile}`} />
                <source media="(max-width: 1000px)" srcSet={`${item.image.tablet}`} />
                <source media="(min-width: 1001px)" srcSet={`${item.image.desktop}`} />
                <img src={`${item.image.desktop}`} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
              </picture>

              <h3 data-testid="item-name">{item.name}</h3>

              {/* link to product page */}
              <Link className="cs-button" to={`/${item.category}/${item.slug}`}>See product</Link>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default OtherProducts