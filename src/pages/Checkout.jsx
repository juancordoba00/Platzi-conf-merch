import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../components/context/AppContext'

const Checkout = () => {

  const {state: {cart}, removeToCart} = useContext(AppContext)

  const handleRemove = product => {
    removeToCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accum, currentValue) => accum + currentValue.price
    const sum = cart.reduce(reducer, 0);

    return sum
  }
  
  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {
          cart.map((item, index) => (
            <div className='Checkout-item' key={index}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type='button' onClick={() => handleRemove(item)}>
                <i className='fas fa-trash-alt'></i>
              </button>
            </div>
          ))
        }
      </div>
      {
        cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to='/checkout/information'>
              <button type='button'>Continuar Pedido</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Checkout
