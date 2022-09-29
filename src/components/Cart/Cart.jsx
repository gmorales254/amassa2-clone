import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const {items, removeItem, clear} =useContext(CartContext);
    // console.log(items);
    
    return (
    <>
        <div className="container">
            <p className="mt-5 pt-5 h3">Carrito de compras</p>
            {!items.length ? 
            <p className="mt-5 fw-bold">
                No hay items
                <Link to="/">
                    <br />
                    <button className="btn btn-dark ">Ir al inicio</button>
                </Link>
            </p>:
                items.length && <ol>
                    {items.map(((item,indx)=> 
                    <li key={indx}>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src={item.imgUrl} alt="" className="w-25 img-thumbnail" />
                            </div>
                            <div className="col text-start">
                            {item.nombre} - {item.quantity}
                                <p>Precio por unidad {item.precio}</p>
                                <br></br>
                                <button className="btn btn-dark" onClick={()=>removeItem(item.id)}>Remover</button>
                            </div>
                        </div>
                        
                    </li>      
                    ))}
                </ol>
            }
            <hr />
            Precio total de la compra = S/.{items.reduce((pv,cv)=> pv + (cv.precio*cv.quantity),0)}
            <div>
                <button className="btn btn-dark" onClick={clear}>Limpiar</button>
                <Link to="/checkout">
                    <button >CheckOut </button>
                </Link>
            </div>
        </div>
    </>
    )
}

export default Cart