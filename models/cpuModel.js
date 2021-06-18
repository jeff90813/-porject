const db = require('../utils/database');

const Cpu = class Cpu {
    constructor(id, name, core, GHz, socket, image_url,socket_id) {
       this.id = id;
       this.name = name;
       this.core = core;
       this.GHz = GHz;
       this.socket = socket;
       this.image_url = image_url;
       this.socket_id=socket_id;
    }   

    // READ
    static fetchAll() {
        return db.execute('SELECT socket_id,cpu_69.id, cpu_69.name, core, GHz, image_url, classification.name as socket FROM cpu_69, classification where socket_id = classification.ID;');
    }


}

module.exports = Cpu;