const Ram = require('../../models/ramModel')

exports.fetchRam = async () => {
    try{
        const [rows] = await Ram.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}