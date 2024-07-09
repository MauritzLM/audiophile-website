import { useState } from "react"
import { item } from "../types"

interface quantityInputProps {
  product: item,
  addToCart: (product: item, qauntity: number) => void
}

function QuantityInput({ product, addToCart }: quantityInputProps) {
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
      <div className="quantity-input">
        <label htmlFor="quantity">
          {/* remove button */}
          <button className="remove-btn" onClick={lowerQuantity}>-</button>

          <input name="quantity" id="quantity" type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} min="1" max="5"></input>
          {/* add button */}
          <button className="add-btn" onClick={increaseQuantity}>+</button>
        </label>
        <button className="cs-button" onClick={() => {
          addToCart(product, inputValue)
          // reset input value
          setInputValue(1)
        }}>add to cart</button>
      </div>
    </>
  )
}

export default QuantityInput