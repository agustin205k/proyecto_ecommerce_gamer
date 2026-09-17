import "./Cart.css"








function Cart() {
    return(
        <>
        <div className="Container-tittle">
            <h2>Tu Carrito</h2>
            <hr />
            <p>Pagos Seguros ------Activacion Rapida-----soporte</p>
        </div>
        <div className="Container-cart">
            <div>
                <div><p>Producto ------------Total</p></div>
                <div>imagenProducto+ tituloProducto+boton de borrar+Precio</div>
            </div>
            <div>
                <div>totales del carrito</div>
                <div>añadir cupon </div>
                <div>total estimado</div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default Cart