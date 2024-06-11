import { Link, useParams } from "react-router-dom"
import { item } from "../../types"

interface productCardShortProps {
    item: item,
    index: number
}

function ProductCardShort({ item, index }: productCardShortProps) {
    const { category } = useParams()
    return (
        <>
            <li key={`${category}-${index}`}>
                {/* image */}
                <picture>
                    {/* fix category image naming* */}
                    <source media="(max-width: 700px)" srcSet={`/src/${item.categoryimage.mobile}`} />
                    <source media="(max-width: 1000px)" srcSet={`/src/${item.categoryimage.tablet}`} />
                    <source media="(min-width: 1001px)" srcSet={`/src/${item.categoryimage.desktop}`} />
                    <img src={`/src/${item.categoryimage.desktop}`} alt={item.category} aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
                </picture>
                
                {/* new? */}
                {item.new ? <p data-testid="new">new product</p> : ''}

                {/* name and description */}
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                {/* button */}
                <Link to={`/${category}/${item.name}`}>See product</Link>
            </li>
        </>
    )
}

export default ProductCardShort