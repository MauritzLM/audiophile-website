import { Link } from "react-router-dom";
import { item } from "../../types"
import { useState } from "react";

interface paymentSuccessProps {
  cart: item[],
  clearCart: () => void
}

function PaymentSuccess({ cart, clearCart }: paymentSuccessProps) {
  const [expandedView, setExpandedView] = useState(false);

  const handleExpandedView = function () {
    if (expandedView) {
      setExpandedView(false)
      return
    }

    setExpandedView(true)

  }

  // track unique items
  const compareObj: { [key: string]: number } = {};

  const cartSorted = cart.sort((a, b) => b.price - a.price);

  // get grandtotal*
  const total = cartSorted.reduce((accumulator, item) => accumulator + item.price, 0);

  return (
    <>
      <h2>Thank you!</h2>
      <p>email confirmation</p>
      <div>
        <div className="cart-contents">
          {cartSorted.map((item, index) => {

            // if item not unique
            if (compareObj[item.name]) {
              compareObj[item.name]++

              return
            }
            else {
              // add item to compare obj
              compareObj[item.name] = 1

              // calculate each unique items' quantity
              let quantity = 0
              cart.forEach(a => {
                if (a.name === item.name) quantity++
              })

              // first item (highest price)
              if (index === 0) {
                return <li key={item.name}>
                  {/* image* name price */}
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>

                  <span>x{quantity}</span>
                </li>
              }

              // remaining items
              return <div className={expandedView ? "" : "hidden"}>
                <li key={item.name}>
                  {/* image* name price */}
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>

                  <span>x{quantity}</span>
                </li>

              </div>
            }
          })}

          {/* other cart items view toggle if more than 1 unique items */}
          {Object.keys(compareObj).length > 1 && (
            <button onClick={handleExpandedView}>{expandedView ? "view less" : `and ${Object.keys(compareObj).length - 1} other item(s)`}</button>
          )}

        </div>
        <div className="total">
          <span>Grand total</span>
          <p>{total}</p>
        </div>
      </div>

      {/* back to home link */}
      <Link onClick={clearCart} to="/">back to home</Link>
    </>
  )
}

export default PaymentSuccess