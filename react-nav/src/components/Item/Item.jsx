import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div            
            className='col-md-4 p-1'                                                           
        >                    
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre} - ${prod.descripcion}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />                                                           
                </div>
                <div className="card-footer"> 
                    <Link to={`/detalle/${prod.id}`} >
                        <button className="btn btn-outline-dark btn-block">
                            detalle del producto
                        </button>   
                    </Link> 
                </div>
            </div>                                                                                                                            
        </div>
    )
}

export default Item