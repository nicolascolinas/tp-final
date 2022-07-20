import { addDoc, getFirestore, collection} from 'firebase/firestore'
import { useCartContext } from '../../contexts/cartContexts'


const Cart = () => {
    const { cart, vaciarCarrito, precioTotal } = useCartContext()

    async function generarOrden(e){
        e.preventDefault()
        let orden = {}
    
        orden.total = precioTotal()
    
        orden.productos = cart.map(cartProductos => {
            const id = cartProductos.id
            const nombre = cartProductos.nombre
            const precio = cartProductos.precio
    
            return (id, nombre, precio)
        })
        const db =getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, orden)
        .then(reps => console.log(reps))
    }
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.foto} className='w-50'/>
                        </div>
                        nombre: {item.nombre} precio: {item.precio} cantidad: {item.cantidad}
                        <button className='btn btn-outline-dark' onClick={vaciarCarrito} >X</button>
                    </li>  
                    )
                }
            </ul>
            <div>
                <button className='btn btn-outline-dark' onClick={vaciarCarrito}>Vaciar Carrito</button>
                <br></br>
                <button className='btn btn-outline-dark' onClick={generarOrden} >Terminar Compra</button>
            </div>
        </div>
    )
    
}

export default Cart