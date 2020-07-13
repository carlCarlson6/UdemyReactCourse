import IDGenerator from '../common/utils/IDGenerator';

class CarritoService {
    constructor(carrito, setCarrito) {
        this.carrito = carrito;
        this.setCarrito = setCarrito;
    }

    AddProduct(product) {
        let carritoId = new IDGenerator().uuidv4(); 
        console.log(`agregando al carrito producto id: ${product.id} - carritoId: ${carritoId}`);
        this.setCarrito([...this.carrito, {...product, carritoId: carritoId}]);
    }

    DeleteProduct(product) {
        console.log(`quitando del carrito producto id: ${product.id} - carritoId: ${product.carritoId}`);
        const newCarrito = this.carrito.filter(carritoElement => carritoElement.carritoId != product.carritoId);
        this.setCarrito(newCarrito);
    }
}

export default CarritoService;