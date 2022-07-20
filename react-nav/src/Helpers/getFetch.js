let productos = [
    {
        id: '1',
        nombre: 'Pizza vegana',
        descripcion: 'Pizza vegana',
        stock: '5',
        precio: '950',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'
    },
    {
        id: '2',
        nombre: 'Pizza de Jamon y morrones',
        descripcion: 'Pizza',
        stock: '5',
        precio: '850',
        foto: 'https://www.supermercedes.com.ar/lagringa/product/pizza-jamon-y-morron/'
    },
    {
        id: '3',
        nombre: 'Pizza muzzarela',
        descripcion: 'Pizza',
        stock: '5',
        precio: '650',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
    {
        id: '4',
        nombre: 'Pizza Napolitana ',
        descripcion: 'Pizza',
        stock: '5',
        precio: '50',
        foto: 'https://2.bp.blogspot.com/-rx8-b7eHCJc/WXIzK-ctEFI/AAAAAAAAGzA/pvwrUN2p9j4TJDesfMfLumdlYyBKZedIgCLcBGAs/s1600/Caf%25C3%25A9%2Bvenezolano%2B%25E2%2580%259CEl%2Bgrano%2Bde%2Boro%2Bde%2Blos%2Ba%25C3%25B1os%2B90%25E2%2580%259D.jpg'

    },
];

export const getFetch = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)    
        // reject('no qtengo nada para')    
    })
} 

