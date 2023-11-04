import { Modal } from "bootstrap"
import { useState } from "react"

const Cart = ({isOpen, closeModal}) => {
    const [cart, setCart] = useState([
        {id: 1, name: 'Topoki', price: 35000, quantity: 0, image: Topoki},
        {id: 2, name: 'Dorayaki', price: 25000, quantity: 0, image: Dorayaki},
        {id: 3, name: 'Gyoza', price: 40000, quantity: 0, image: Gyoza},
        {id: 4, name: 'Udon', price: 55000, quantity: 0, image: Udon},
    ])

    const increaseQuantity = (id) =>{
        const updateCart = cart.map((product) =>{
            if (product.id === id){
                return {...product, quantity: product.quantity + 1};
            }
            return product;
        });
        setCart(updateCart);
    }

    const decreaseQuantity = (id) =>{
        const updateCart = cart.map((product) =>{
            if (product.id === id && product.quantity > 0){
                return {...product, quantity: product.quantity - 1};
            }
            return product;
        });
        setCart(updateCart);
    }

    return(
        <Modal>
            <h2>Keranjang Belanja</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) =>(
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} width='50' height='50'/>
                                </td>
                                <td>{product.name}</td>
                                <td>Rp.{product.price}</td>
                                <td>
                                    <button type="button" onClick={() => decreaseQuantity(product.id)}
                                    className="btn btn-light">
                                        -
                                    </button>
                                    {product.quantity}
                                    <button type="button" onClick={() => increaseQuantity(product.id)}
                                    className="btn btn-light">
                                        +
                                    </button>
                                </td>
                                <td>Rp.{product.price * product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Modal>
    )
}
export default Cart;