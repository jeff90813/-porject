const db = require('../utils/database');

const Categories = class Categories {
    constructor(id, name, core, clock, socket_id, img_url) {
       this.id = id;
       this.name = name;
       this.core = core;
       this.clock = clock;
       this.socket_id = socket_id;
       this.img_url = img_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from ');
    }


}

module.exports = Categories;