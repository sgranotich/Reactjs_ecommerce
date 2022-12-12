
const CartWidget = () => {

  return (
    <div >
      <button className="cart">
      <img className="cart_logo" src={process.env.PUBLIC_URL + "/cart.png"} alt="cart"/> 1 <img/>
      </button>
    </div>
  )
}
 
export default CartWidget
