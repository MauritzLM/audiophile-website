import { useParams } from "react-router-dom"

function Product({products, updateCart}) {
    const { productname } = useParams();

    // import product card component*

    return (
        <>
            <h1>{productname} page</h1>
        </>
    )
}

export default Product