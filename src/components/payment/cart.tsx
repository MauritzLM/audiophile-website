import { Link } from "react-router-dom";
import { item } from "../../types";
import CartQuantityInput from "./cartQuantityInput";

interface cartProps {
  cart: item[],
  updateCart: (product: item, quantity: number) => void,
  clearCart: () => void,
  viewCart: boolean
}

function Cart({ cart, updateCart, clearCart, viewCart }: cartProps) {

  // array to keep track of unique items
  const compareArr: string[] = [];
  // sort cart array by item price
  const cartSorted = cart.sort((a, b) => b.price - a.price)

  // empty cart
  if (!cart.length) {
    return (
      <>
        <div className={viewCart ? "cart-wrapper" : "hidden"}>
          <div className="cart">
            <h2>Cart ({cart.length})</h2>
            <p>cart is empty</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={viewCart ? "cart-wrapper" : "hidden"}>
        <div className="cart">
          {/* remove all */}
          <button onClick={clearCart}>Remove all</button>

          <h2>Cart ({cart.length})</h2>

          <ul>
            {/* for each unique item */}
            {cartSorted.map((item) => {
              // check if item is unique
              if (compareArr.includes(item.name)) {
                return
              }
              else {
                compareArr.push(item.name)

                return <li key={item.name}>
                  {/* image* name price */}
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>

                  <CartQuantityInput product={item} cart={cart} updateCart={updateCart} />
                </li>
              }
            })}

          </ul>

          {/* display total* */}
          <div><span>Price</span><span data-testid="price">$ {cartSorted.reduce((accumulator, item) => accumulator + item.price, 0)}</span></div>

          {/* checkout link* */}
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </>
  )
}

export default Cart;