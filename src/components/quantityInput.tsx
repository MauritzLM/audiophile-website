import { useState } from "react"
import { item } from "../types"

interface quantityInputProps {
  product: item,
  updateCart: (product: item, qauntity: number) => void
}

function QuantityInput({ product, updateCart }: quantityInputProps) {
  const [inputValue, setInputValue] = useState(1)
  // controlled input with + and - buttons*
  return (
    <>
      <div>
        <input type="number" placeholder="1" value={inputValue}></input>
        <button onChange={updateCart(product, inputValue)}></button>
      </div>
    </>
  )
}

export default QuantityInput