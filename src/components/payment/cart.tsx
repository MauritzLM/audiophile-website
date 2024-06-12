import { item } from "../../types";
import CartQuantityInput from "./cartQuantityInput";

interface cartProps {
  cart: item[],
  updateCart: (product: item, quantity: number) => void,
  clearCart: () => void
}

function Cart({ cart, updateCart, clearCart }: cartProps) {
  
  // array to keep track of unique items
  const compareArr: string[] = [];
  // sort cart array by price
  const cartSorted = cart.sort((a, b) => b.price - a.price)

  return (
    <>
      {/* remove all */}
      <button onClick={clearCart}>remove all</button>

      <h2>Cart ({cart.length})</h2>

      <ul>
        {/* for each unique item* */}
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
      {/* checkout link* */}

    </>
  )
}

export default Cart;