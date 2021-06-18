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
    static fetchCpu(cpu_id){
      return db.execute(`SELECT cpu_69.id, cpu_69.name as cname, core, GHz, image_url as cpu_image, classification.name as socket FROM cpu_69, classification 
      where socket_id = classification.ID and cpu_69.id = ?;`, [cpu_id]);
    }
    static fetchMotherboard(cpu_id,motherboard_id){
      return db.execute(`SELECT motherboard.name as mname,motherboard.image_url as motherboard_image,motherboard.size as msize, motherboard.cpu_type,classification.name as ram_type
      from classification,motherboard,cpu_69 
      where classification.ID = ram_id and cpu_69.id = ? and cpu_69.socket_id = motherboard.socket_id and motherboard.id = ?;`, [cpu_id,motherboard_id]);
    }
    static fetchRam(cpu_id,motherboard_id,ram_id){
      return db.execute(`SELECT ram.name as rname, ram.image_url as ram_image, ram.size as rsize,ram.clock_rate,classification.name as ram_type
      from classification,motherboard,cpu_69,ram 
      where classification.ID = motherboard.ram_id and cpu_69.id = ? and motherboard.id = ? and motherboard.ram_id = ram.ram_id and ram.id = ?;`, [cpu_id, motherboard_id, ram_id]);
    }
    static fetchdata(cpu_id,motherboard_id,ram_id){
      /*return db.execute(`
      SELECT cpu_69.id as cpu_id, motherboard.id as mb_id,ram.id as ram_id, 
        cpu_69.name as cname, cpu_69.core, cpu_69.image_url as cpu_image ,cpu_69.GHz,
        motherboard.name as mbname, motherboard.image_url as motherboard_image, motherboard.size as msize,motherboard.cpu_type,
        ram.name,ram.image_url as ram_image,ram.size as rsize,ram.clock_rate,classification.name as ram_type
      from classification,motherboard,cpu_69,ram 
      where classification.ID = motherboard.ram_id and cpu_69.id = ? and motherboard.id = ? and ram.id = ? and motherboard.ram_id = ram.ram_id and cpu_69.socket_id = motherboard.socket_id;`, [cpu_id, motherboard_id, ram_id]);*/



        //return db.execute('Select  cpu_69.name as cname,motherboard.name as mname,ram.name as rname,ram.size as rsize,ram.clock_rate,motherboard.size as msize,cpu_69.GHz,cpu_69.core , cpu_69.image_url as cpu_image , motherboard.image_url as motherboard_image , ram.image_url as ram_image from cpu_69,motherboard,ram where cpu_69.id=? and motherboard.id=? and ram.id=?',[cpu_id,motherboard_id,ram_id]);

     }

}

module.exports =Select;