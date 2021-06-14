const db = require('../utils/database');

const Motherboard = class motherboard {
    constructor(id, name, socket_id, ram_id, size,cpu_type) {
       this.id = id;
       this.name = name;
       this.socket_id = socket_id;
       this.ram_id = ram_id;
       this.size = size;
       this.cpu_type=cpu_type;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT motherboard.id,motherboard.name,image_url,motherboard.cpu_type,motherboard.size,motherboard.cpu_type,classification.name as ram_type from motherboard,classification where  ram_id=classification.ID;');

    }
    static fetchID(id) {
        return db.execute('SELECT motherboard.id,motherboard.name,image_url,motherboard.size,motherboard.cpu_type,classification.name as ram_type from motherboard,classification where  classification.ID=socket_id and classification.ID=?;',[id]);


    }
    


}

module.exports = Motherboard;