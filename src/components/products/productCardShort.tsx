import { Link, useParams } from "react-router-dom"
import { item } from "../../types"
import "/src/assets/sass/components/productCardShort.scss"

interface productCardShortProps {
    item: item,
    index: number
}

function ProductCardShort({ item, index }: productCardShortProps) {
    const { category } = useParams()

    // format item name -> split name from category
    const nameArr = item.name.split(" ");
    const categoryName = nameArr.pop();

    return (
        <>
            <li className="product-card-short" key={`${category}-${index}`}>
                {/* image */}
                <picture>
                    {/* fix category image naming* */}
                    <source media="(max-width: 700px)" srcSet={`${item.categoryimage.mobile}`} />
                    <source media="(max-width: 1199px)" srcSet={`${item.categoryimage.tablet}`} />
                    <source media="(min-width: 1200px)" srcSet={`${item.categoryimage.desktop}`} />
                    <img src={`${item.categoryimage.desktop}`} alt={item.category} aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>

                <div className="cs-text">
                    {/* new? */}
                    {item.new ? <p className="new" data-testid="new">new product</p> : ''}

                    {/* name and description */}
                    <h2>{nameArr.join(" ")}<br /> {categoryName}</h2>
                    <p>{item.description}</p>

                    {/* button */}
                    <Link className="cs-button" to={`/${category}/${item.slug}`}>See product</Link>
                </div>
            </li>
        </>
    )
}

export default ProductCardShort