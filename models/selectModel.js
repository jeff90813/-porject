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
        this.core=core;
        this.GHz=GHz;
        this.msize=msize;
        this.clock_rate=clock_rate;
        this.rsize=rsize;
        this.cname=cname;
        this.mname=mname;
        this.rname=rname;

    }

    static fetchdata(cpu_id,motherboard_id,ram_id){
        
      console.log(cpu_id,motherboard_id,ram_id);
        return db.execute('Select  cpu_69.name as cname,motherboard.name as mname,ram.name as rname,ram.size as rsize,ram.clock_rate,motherboard.size as msize,cpu_69.GHz,cpu_69.core , cpu_69.image_url as cpu_image , motherboard.image_url as motherboard_image , ram.image_url as ram_image from cpu_69,motherboard,ram where cpu_69.id=? and motherboard.id=? and ram.id=?',[cpu_id,motherboard_id,ram_id]);
     }

}

module.exports =Select;