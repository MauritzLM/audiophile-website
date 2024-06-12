import { useState } from "react"
import { item } from "../types"

interface quantityInputProps {
  product: item,
  updateCart: (product: item, qauntity: number) => void
}

function QuantityInput({ product, updateCart }: quantityInputProps) {
  const [inputValue, setInputValue] = useState(1)

  const lowerQuantity = function () {
    if (inputValue === 1) {
      return
    } else {
      setInputValue(inputValue - 1)
    }
  }

  const increaseQuantity = function () {
    if (inputValue === 5) {
      return
    } else {
      setInputValue(inputValue + 1)
    }
  }

  return (
    <>
      <div>
        <label htmlFor="quantity">quantity</label>
        <div>
          {/* remove button */}
          <button data-testid="remove" className="remove-btn" onClick={lowerQuantity}>-</button>

          <input name="quantity" id="quantity" type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} min="1" max="5"></input>
          {/* add button */}
          <button data-testid="add" className="add-btn" onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={() => updateCart(product, inputValue)}>add to cart</button>
      </div>
    </>
  )
}

export default QuantityInput