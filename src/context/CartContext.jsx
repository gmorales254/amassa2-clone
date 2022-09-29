import React , {Children, useContext, useState}from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {

    const [items, setItems ] = useState([]);

    function addItem(item,quantity) {
        
        if (isInCart(item.id)) {
            let aux = items;
            let itemIndex = aux.findIndex((element) => element.id === item.id);
            aux[itemIndex].quantity += quantity;
            setItems([...aux])
        } else {
            setItems([...items, { ...item, quantity }]);
        }
    }

    function removeItem(itemId) {
        setItems(items.filter((element) => element.id !== itemId))
    }

    function clear() {
        setItems([]);
    }

    function isInCart(itemId) {
        return items.find((element) => element.id === itemId);
    }

    return (<CartContext.Provider value={{addItem,removeItem, items,clear}}>
        {children}
    </CartContext.Provider>)
}
