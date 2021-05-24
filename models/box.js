class Box {
    constructor( id,
        name,
        description,
        image,
        price,
        rate,color,cover ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image=image;
            this.price = price;
            this.rate = rate;   
            this.color=color;
            this.cover=cover;
}
}


module.exports = Box;