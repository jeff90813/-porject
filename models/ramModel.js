const db = require('../utils/database');

const Ram = class Ram {
    constructor(id, name, name, clock, ram_id, img_url) {
       this.id = id;
       this.name = name;
       this.clock = clock;
       this.ram_id = ram_id;
       this.size = size;
       this.img_url = img_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from ');
    }


}

module.exports = Ram;