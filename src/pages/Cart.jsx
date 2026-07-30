import { useCart } from "../context/CartContext";

export default function Cart() {

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice
  } = useCart();

  return (
    <div style={{padding:"40px"}}>

      <h1>Shopping Cart</h1>

      {cart.length===0 && <p>Your cart is empty.</p>}

      {cart.map(item=>(
        <div
          key={item.id}
          style={{
            display:"flex",
            justifyContent:"space-between",
            margin:"20px 0",
            borderBottom:"1px solid #ddd",
            paddingBottom:"15px"
          }}
        >

          <div>

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button onClick={()=>decreaseQty(item.id)}>-</button>

            <span style={{margin:"0 15px"}}>
              {item.qty}
            </span>

            <button onClick={()=>increaseQty(item.id)}>+</button>

          </div>

          <button
            onClick={()=>removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

      <h2>Total : ₹{totalPrice}</h2>

    </div>
  );
}