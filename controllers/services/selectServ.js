const select = require('../../models/selectModel')


exports.fetchALL = async (cpu_id,motherboard_id,ram_id) => {
    try{
        const [rows] = await select.fetchdata (cpu_id,motherboard_id,ram_id);
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}