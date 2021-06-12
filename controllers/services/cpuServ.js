const Cpu = require('../../models/cpuModel')

exports.fetchCpu = async () => {
    try{
        const [rows] = await Cpu.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}