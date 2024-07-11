import { Link } from "react-router-dom"
import { item } from "../../types"
import CartQuantityInput from "./cartQuantityInput"
import "/src/assets/sass/components/cart.scss"

interface cartProps {
  cart: item[],
  updateCart: (product: item, quantity: number) => void,
  clearCart: () => void,
  viewCart: boolean,
  handleViewCart: () => void
}

function Cart({ cart, updateCart, clearCart, viewCart, handleViewCart }: cartProps) {

  // array to keep track of unique items
  const compareArr: string[] = [];
  // sort cart array by item price
  const cartSorted = cart.sort((a, b) => b.price - a.price)

  // empty cart
  if (!cart.length || !cart) {
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

          <div>
            <h2>Cart ({cart.length})</h2>
            {/* remove all */}
            <button className="remove-all" onClick={clearCart}>Remove all</button>
          </div>

          <ul>
            {/* for each unique item */}
            {cartSorted?.map((item) => {
              // check if item is unique
              if (compareArr.includes(item.name)) {
                return
              }
              else {
                compareArr.push(item.name)
                // remove last word from name string
                const nameArr = item.name.split(" ");
                nameArr.pop();

                return <li key={item.name}>
                  {/* image name price */}

                  <div>
                    <img src={`/images/cart/image-${item.slug}.jpg`} alt="" height="64px" width="64px" loading="lazy" decoding="async" aria-hidden="true" />
                    <h4>{nameArr.join(" ")}</h4>
                    <p>$ {new Intl.NumberFormat().format(item.price)}</p>
                  </div>

                  <CartQuantityInput product={item} cart={cart} updateCart={updateCart} />
                </li>
              }
            })}

          </ul>

          {/* display total */}
          <div className="cart-total"><span>total</span><span data-testid="price">$ {new Intl.NumberFormat().format(cartSorted.reduce((accumulator, item) => accumulator + item.price, 0))}</span></div>

          {/* checkout link */}
          <Link onClick={handleViewCart} className="cs-button" to="/checkout">Checkout</Link>
        </div>
      </div>
    </>
  )
}

export default Cart;