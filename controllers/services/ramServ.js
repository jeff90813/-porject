const Ram = require('../../models/cpuModel')

exports.fetchCpu = async () => {
    try{
        const [rows] = await Ram.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}