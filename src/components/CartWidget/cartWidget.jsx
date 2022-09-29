import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const {items} = useContext(CartContext);

    return (
        <div>
            <div className="">
            <Link  to="/cart">
                <button className="btn btn-outline-light iconCart" type=""><i className="bi bi-cart "></i>
                <span>
                    {items.reduce((pv,cv)=> pv + cv.quantity,0)}
                </span>
                </button>
            </Link>
            </div> 
        </div>
    )
}

export default CartWidget