import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../services/indexFirebase';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item,setItem] = useState({});

    useEffect(() => {
        const getColData = async() =>{
            try {
                const data = collection(db,"productos");
                const col = await getDocs(data);
                const res = col.docs.map((doc)=> doc={ id:doc.id,...doc.data() } )
                // setProductos(res)
                new Promise ((resolve)=>{
                    
                    
                        resolve(res.find((element)=> element.id == id));
                    
                }).then((res)=>{
                    setItem(res);
                })
                
            } catch (error) {
                console.log(error);
            }
        } 
        getColData();
        return () => {
        }
    }, [id])


    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer