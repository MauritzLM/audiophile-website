// import { Link } from "react-router-dom"
import { item } from "../../types"

interface otherProductProps {
  product: item
}

function OtherProducts({ product }: otherProductProps) {

  return (
    <>
      <div>
       <h2>You may also like</h2>
        {product.others.map((item, index) => {
          return <div key={`other-${index}`}>
            <picture>
              {/* fix image links in db* */}
              <source media="(max-width: 700px)" srcSet={`/src/${item.image.mobile}`} />
              <source media="(max-width: 1000px)" srcSet={`/src/${item.image.tablet}`} />
              <source media="(min-width: 1001px)" srcSet={`/src/${item.image.desktop}`} />
              <img src={`/src/${item.image.desktop}`} alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
            </picture>

            <h3>{item.name}</h3>

            {/* link to product page - need to add category property on object* */}
            {/* <Link to={``}>{}</Link> */}
          </div>
        })}
      </div>
    </>
  )
}

export default OtherProducts