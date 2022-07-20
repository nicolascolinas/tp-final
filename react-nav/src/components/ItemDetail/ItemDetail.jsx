import { useCartContext } from "../../contexts/cartContexts"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({producto}) => {
    const { cart, addToCart } = useCartContext()
    /// estado 
    const onAdd = (cant) => {
        console.log(cant)
        addToCart( {...producto, cantidad: cant} )
    }

    console.log(cart)

    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.foto} alt="" className="w-50 m-5" />
            </div>
            <div className="col-md-6 mt-5"> 
                <div className="row mt-5">
                    <h2>nombre: {producto.nombre}</h2>
                    <h3>categoría: {producto.descripcion}</h3>
                    <h4>precio: {producto.precio}</h4>
                </div>               
                <div className="row">
                    <div className="col">
                        {/* ternario */}
                        <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail