import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore,query, where } from 'firebase/firestore';
import db from '../../services/indexFirebase';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    useEffect(() => {
        


        const itemCollection = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria)) : collection(db, "productos");
        getDocs(itemCollection).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })

        // const getColData = async() =>{
        //     try {
        //         const data = collection(db,"productos");
        //         const col = await getDocs(data);


        //         const res = col.docs.map((doc)=> doc={ id:doc.id,...doc.data() } )
        //         // setProductos(res)
        //         new Promise ((resolve)=>{
        //             let productosFilter = [];
                    
        //                 productosFilter = categoriaid ? res.filter((element)=>element.categoria === categoriaid) : res;
        //                 resolve(productosFilter);
                    
        //         }).then((res)=>{
        //             setProductos(res);
        //         })
                
        //     } catch (error) {
        //         console.log(error);
        //     }
        // } 

        // getColData();

        
        // return () => {
        // }


    }, [categoria])
    

    return (
        <div>
            { productos.length ?  
                <div className="">
                <Hero/>
                <div className="container mt-4">
                    <p className="tituloCatalogo">Nuestros productos</p>
                    <ItemList items={productos}/>
                </div>
                </div>   :
                <div className="mt-5 pt-5"><div className="spinner-border text-dark container " role="status"></div>
                </div>
            }
        </div>
    )
}

export default ItemListContainer