class Dish {
    constructor( id,
        name,
        description,
        image,
        price,quantity,
        rate ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image=image;
            this.price = price;
            this.quantity=quantity;
            this.rate = rate;           
}
}


module.exports = Dish;