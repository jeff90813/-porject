const Motherboard = require('../../models/cpuModel')

exports.fetchCpu = async () => {
    try{
        const [rows] = await Motherboard.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}