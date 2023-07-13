import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './redux/userReducer';
import Biodata from './Biodata';
import { cartAction } from './redux/cartReducer';

function App() {
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  console.log(user);

  const handleClick = () => {
    dispatch(userAction.updateProfile({
      name: 'ricky',
      email: 'ricky@gmail.com'
    }))
  }

  const handleReset = () => {
    dispatch(userAction.resetProfile())
  }

  const handleAddToCart = () => {
    dispatch(cartAction.addToCart({
      name: 'baju',
      price: 10000
    }))
  }

  return <div>
    <h1>Liat log untuk melihat redux log</h1>
    <span>{user.name}</span> <br />
    <span>{user.email}</span><br />
    <button onClick={handleClick}>Ubah</button>
    <button onClick={handleReset}>Reset</button>

    <hr />
    <Biodata />
    <hr />
    <h1>Cart: total item {cart.items.length}</h1>
    <button onClick={handleAddToCart}>Add to cart</button>
  </div>
}

export default App

