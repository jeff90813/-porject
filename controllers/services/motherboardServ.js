const Motherboard = require('../../models/motherboardModel')

exports.fetchMotherboard = async () => {
    try{
        const [rows] = await Motherboard.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}