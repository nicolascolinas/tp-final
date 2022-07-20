import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList'
import { getFetch } from '../../Helpers/getFetch'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

 

const ItemListContainer = () => {
    const [producto, setProducto] = useState([])
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    const { categoriaId } = useParams()

    const [bool, setBool] = useState(true)

    //para un producto
//useEffect(() =>{
    //const db = getFirestore()
    //const querryItem = doc(db, 'producto', 'PbB2xIqNT7M2JkMPDRKm')
    //getDoc(querryItem) 
    //.then(resp => setProducto( { id:resp.id, ...resp.data() } ))
//}, [bool])


//para todos los productos
//useEffect(() =>{
    //const db = getFirestore()
    //const querryCollection = collection(db, 'productos')
    //getDocs(querryCollection)
    //.then( data => setProductos(data.docs.map(productos => ({id: productos.id, ...productos.data() }) ) ) )
    //.catch(err => console.log(err)) 
    //.finally(()=> setLoading(false))
//}, [])


//Traer todos los items
useEffect(() =>{
    const db = getFirestore()
    const querryCollection = collection(db, 'productos')
    const queryCollectionFilter = query(querryCollection, where('precio', '==', 50))

    getDocs(querryCollection)
    .then( data => setProductos(data.docs.map(productos => ({id: productos.id, ...productos.data() }) ) ) )
    .catch(err => console.log(err)) 
    .finally(()=> setLoading(false))
}, [])


    console.log(productos)

    //fetch
    //console.log(categoriaId)
    //useEffect(()=>{
        //if (categoriaId) {
            //getFetch()// llamada a la api
            //.then((resp)=> {
                    //setProductos(resp.filter(producto => producto.descripcion === categoriaId ))
                    //setLoading(false)
            //})
            //.catch(err => console.log(err))           
        //} else {
            //getFetch()// llamada a la api
            //.then( (resp)=> setProductos(resp) )
            //.catch(err => console.log(err)) 
            //.finally(()=> setLoading(false))           
        //}
        
        // .finally(()=> )
    //}, [categoriaId])

   
   
    return (
        <div>
            { loading ? 
                <h1>Espere un momento...</h1>            
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer