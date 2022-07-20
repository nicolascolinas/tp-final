import { useEffect, useState } from "react"
import { getFetch } from '../../Helpers/getFetch'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Intercambiabilidad from '../../components/Intercambiabilidad/Intercambiabilidad'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'



const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})
    const [bool, setBool] = useState(true)
    const { id } = useParams()

    console.log(id)

    //useEffect(() => {
        //getFetch(id)
            //.then((resp) => setProducto(resp))
            //.catch(err => console.log(err))            
    //}, [])

//para un producto
useEffect(() =>{
    const db = getFirestore()
    const querryItem = doc(db, 'productos', id)
    getDoc(querryItem) 
    .then(resp => setProducto( { id:resp.id, ...resp.data() } ))
}, [bool])
    
    
    return (
        <div className="border border-1 border-danger">
            <ItemDetail producto={producto} />
            <Intercambiabilidad />
        </div>
    )
}
export default ItemDetailConatainer