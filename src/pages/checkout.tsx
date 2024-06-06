import { Link } from "react-router-dom"

function Checkout({cart}) {
    // implement go back*
    return (
        <>
          <Link to="/">go back</Link>
         <h1>Checkout page</h1> 
        </>
    )
}

export default Checkout