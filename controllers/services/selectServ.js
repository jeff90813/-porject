const select = require('../../models/selectModel')


exports.fetchALL = async (cpu_id,motherboard_id,ram_id) => {
    try{
        const [rows] = await select.fetchdata (cpu_id,motherboard_id,ram_id);
       

        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
exports.fetchcpu = async (cpu_id) => {
    try{
        const [rows] = await select.fetchCpu(cpu_id);
       
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
exports.fetchmotherboard = async (cpu_id,motherboard_id) => {
    try{
        const [rows] = await select.fetchMotherboard (cpu_id, motherboard_id);
       
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
exports.fetchram = async (cpu_id,motherboard_id,ram_id) => {
    try{
        const [rows] = await select.fetchRam (cpu_id,motherboard_id,ram_id);
       

        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}