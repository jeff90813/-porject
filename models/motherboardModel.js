const db = require('../utils/database');

const Motherboard = class motherboard {
    constructor(id, name, socket_id, ram_id, size,cpu_type,cpu_id,ram_type) {
       this.id = id;
       this.name = name;
       this.socket_id = socket_id;
       this.ram_id = ram_id;
       this.size = size;
       this.cpu_type=cpu_type;
       this.cpu_id=cpu_id;
       this.ram_type = ram_type;
    }

    // READ
    static fetchAll() {
        return db.execute(' SELECT motherboard.id,motherboard.name,image_url,motherboard.cpu_type,motherboard.size,motherboard.cpu_type,classification.name as ram_type from motherboard,classification where  ram_id=classification.ID;');

    }
    /*static fetchID(id) {
        return db.execute('SELECT motherboard.ram_id,motherboard.id,motherboard.name,image_url,motherboard.size,motherboard.cpu_type,classification.name as ram_type from motherboard,classification where  classification.ID=socket_id and classification.ID=?;',[id]);


    }*/

    /*static fetchID(id){
        return db.execute('SELECT cpu_69.id as cpu_id,motherboard.ram_id,motherboard.id,motherboard.name,motherboard.image_url,motherboard.size,motherboard.cpu_type,classification.name as ram_type from motherboard,classification,cpu_69 where motherboard.socket_id=cpu_69.socket_id and classification.id=cpu_69.socket_id and cpu_69.id=?;',[id]);
    }*/
    static fetchID(id) {
        return db.execute(`SELECT cpu_69.id as cpu_id, motherboard.id as mb_id,motherboard.name,motherboard.image_url,motherboard.size,motherboard.cpu_type,classification.name as ram_type, motherboard.socket_id, ram_id
        from classification,motherboard,cpu_69 
        where classification.ID = ram_id and cpu_69.id = ? and cpu_69.socket_id = motherboard.socket_id;`,[id]);
    }
    


}

module.exports = Motherboard;
