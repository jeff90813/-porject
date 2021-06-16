const db = require('../utils/database');

const Ram = class Ram {
    constructor(id, name, clock_rate, ram_type, image_url, size) {
       this.id = id;
       this.name = name;
       this.clock_rate = clock_rate;
       this.ram_type = ram_type;
       this.size = size;
       this.image_url = image_url;
       this.cpu_id=cpu_id;
       this.motherboard_id=motherboard_id;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT motherboard.id as motherboard_id,ram.id, ram.name, clock_rate, size, image_url, classification.name as ram_type FROM ram, classification,motherboard where ram_id = classification.ID');
    }
    static fetchID(id,cid){
        return db.execute('SELECT cpu_69.id as cpu_id, motherboard.id as motherboard_id ,ram.id, ram.name, clock_rate, ram.size, ram.image_url, classification.name as ram_type  FROM ram, classification,motherboard ,cpu_69  where classification.ID=motherboard.ram_id and classification.ID = ram.ram_id and cpu_69.id=? and motherboard.id=?',[cid],[id]); 
       }

}

module.exports = Ram;