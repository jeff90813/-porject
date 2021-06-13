const db = require('../utils/database');

const Motherboard = class Motherboard {
    constructor(id, name, price, remote_url, local_url) {
       this.id = id;
       this.name = name;
       this.socket_id = socket_id;
       this.ram_id = ram_id;
       this.size = size;
    }

    // READ
    static fetchAll() {
        return db.execute('');
    }


}

module.exports = Motherboard;