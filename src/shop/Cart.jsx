import { createContext, useState } from "react";


export class Cart{

    add(item) {
        const index = this.items.findIndex(i => i.id === item.id && i.color === item.color);
        if(index === -1){
            let items = this.items.concat(item);
            this.setItems(items);
        } else {
            this.setCount(index, this.items[index].count + item.count)
        }
    }

    remove(index){
        let items = this.items.slice();
        items.splice(index, 1);
        this.setItems(items);
    }

    setCount(index, count){
        let items = this.items.slice();
        items[index].count = count;
        this.setItems(items);
    }
}


export const CartContext = createContext();
export const CartItemsContext = createContext();
const cart = new Cart()

export function CartProvider({children}){
    const [items, setItems] = useState([]); //стан компонента (cartProvider)
    cart.setItems = setItems; // те саме шо і знизу (вміст змінної це функція, яка змінює значення стану items).
    cart.items = items;  //переклали вміст змінної (2гий items) в ключ обєкта (1ий items), ключа не було, ми його створили.

    return <CartContext.Provider value={cart}>
        <CartItemsContext.Provider value={items}>
            {children}
        </CartItemsContext.Provider>
    </CartContext.Provider>

}