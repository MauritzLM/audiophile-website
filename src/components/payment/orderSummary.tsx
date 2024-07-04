
import { item } from "../../types"
import { getImageURL } from "../../utils/image-util";

interface orderSummaryProps {
    cart: item[]
}

function OrderSummary({ cart }: orderSummaryProps) {

    // object to keep track of unique items
    const compareObj: { [key: string]: number } = {};
    // sort cart array by price
    const cartSorted = cart.sort((a, b) => b.price - a.price);

    const total = cartSorted.reduce((accumulator, item) => accumulator + item.price, 0);

    return (
        <>
            <ul id="order-summary">
                {/* items */}
                {cartSorted.map((item) => {

                    // if item not unique
                    if (compareObj[item.name]) {
                        compareObj[item.name]++

                        return
                    }
                    else {
                        // add item to compare obj
                        compareObj[item.name] = 1

                        {/* calculate item quantity */ }
                        let quantity = 0
                        cart.forEach(a => {
                            if (a.name === item.name) quantity++
                        })

                        // remove last word from name string
                        const nameArr = item.name.split(" ");
                        nameArr.pop();

                        return <li key={item.name}>
                            {/* image name price */}
                            <div>
                                <img src={getImageURL(`/src/assets/images/cart/image-${item.slug}.jpg`)} alt="" height="64px" width="64px" loading="lazy" decoding="async" aria-hidden="true" />
                                <h4>{nameArr.join(" ")}</h4>
                                <p>$ {item.price}</p>
                            </div>

                            <span data-testid="quantity">x{quantity}</span>
                        </li>
                    }
                })}
            </ul>
            <div className="amount-calculations">
                {/* total */}
                <div><span>Total</span> <span>$ {total}</span></div>
                {/* shipping */}
                <div><span>Shipping</span> <span>$ 50</span></div>
                {/* vat * .2 */}
                <div><span>VAT (included)</span> <span>$ {Math.round(total * 0.2)}</span></div>
            </div>
            <div className="grand-total">
                {/* grand total */}
                <div><span>Grand Total</span> <span>$ {total + 50}</span></div>
            </div>

        </>
    )
}

export default OrderSummary