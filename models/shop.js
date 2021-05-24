class Shop {
    constructor( id,
        name,
        description,
        image,
        price,
        rate,quantity) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image=image;
            this.price = price;
            this.rate = rate;      
            this.quantity=quantity; 
}

}


module.exports = Shop;