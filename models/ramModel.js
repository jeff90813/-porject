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
        return db.execute('SELECT ram.id, ram.name, clock_rate, ram.size, ram.image_url, classification.name as ram_type FROM ram, classification where ram.ram_id = classification.ID');
    }
    /*static fetchID(cid,id){
        console.log(cid,id);
        
        return db.execute('SELECT cpu_69.id as cpu_id, motherboard.id as motherboard_id ,ram.id, ram.name, clock_rate, ram.size, ram.image_url, classification.name as ram_type  FROM ram, classification,motherboard ,cpu_69  where classification.ID=motherboard.ram_id and classification.ID = ram.ram_id and cpu_69.id=? AND motherboard.id=?',[cid,id]);
    }*/
    static fetchID(cid,mid){
        return db.execute(`SELECT cpu_69.id as cpu_id, motherboard.id as mb_id,ram.id as ram_id,ram.name,ram.image_url,ram.size,ram.clock_rate,classification.name as ram_type
        from classification,motherboard,cpu_69,ram 
        where classification.ID = motherboard.ram_id and cpu_69.id = ? and motherboard.id = ? and motherboard.ram_id = ram.ram_id;`, [cid, mid]);
    }


}

module.exports = Ram;