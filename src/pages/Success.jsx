import React, { useContext } from 'react'
import { ChartMap } from '../components/atoms/map/Map-react-leaflet';
import { AppContext } from '../components/context/AppContext'

const Success = () => {
  const {state: buyer} = useContext(AppContext);

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <ChartMap />
        </div>
      </div>
    </div>
  )
}

export default Success