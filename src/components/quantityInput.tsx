import { useState } from "react"
import { item } from "../types"

interface quantityInputProps {
  product: item,
  updateCart: (product: item, qauntity: number) => void
}

function QuantityInput({ product, updateCart }: quantityInputProps) {
  const [inputValue, setInputValue] = useState(1)
  
  return (
    <>
      <div>
        <label htmlFor="quantity">quantity</label>
        <input name="quantity" id="quantity" type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} min="1" max="5"></input>
        <button onClick={() => updateCart(product, inputValue)}>add to cart</button>
      </div>
    </>
  )
}

export default QuantityInput