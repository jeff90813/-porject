const db = require('../utils/database');



const Select = class select {
    constructor(id,cpu_id,cpu_image,motherboard_id,motherboard_image,ram_id,ram_image) {
        this.id=id;
        this.cpu_id=cpu_id;
        this.cpu_image=cpu_image;
        this.motherboard_id=motherboard_id;
        this.motherboard_image=motherboard_image;
        this.ram_id=ram_id;
        this.ram_image=ram_image;
    }

    static fetchdata(cpu_id,motherboard_id,ram_id){
        return db.execute('Select * from finall where cpu_id=? and motherboard_id=? and ram_id=?',[cpu_id],[motherboard_id],[ram_id]);
    }

}

module.exports =Select;