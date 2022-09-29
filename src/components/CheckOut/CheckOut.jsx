import { addDoc, collection } from 'firebase/firestore';
import React, {useContext, useState} from 'react'
import {CartContext} from "../../context/CartContext";
import db from '../../services/indexFirebase';

const CheckOut = () => {

    const {items} = useContext(CartContext);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function finalizarCompra() {
        console.log("hola mundo")
        let order = {
            buyer: {name,phone,email}, 
            items: items,
            total: items.reduce((pv,cv)=> pv + (cv.quantity* cv.precio),0)
        };
        const orderCollection = collection(db,"orderd");
        console.log(order)
        addDoc(orderCollection,order).then(({id})=>{
            console.log(id);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="mt-5 pt-5">
            <div>CheckOut</div>
            
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="nombre"></input>
                <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="phone"></input>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email"></input>
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            
        </div>
    )
}

export default CheckOut