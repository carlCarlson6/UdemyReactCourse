class PriceCalculator {

    calcTotalPrice(products) {
        return products.reduce((totalActural, producto) => {return totalActural + producto.precio;}, 0);
    }

}

export default PriceCalculator;