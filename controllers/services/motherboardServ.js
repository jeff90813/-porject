const Motherboard = require('../../models/motherboardModel')

exports.fetchMotherboard = async () => {
    try{
        const [rows] = await Motherboard.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
exports.fetchMotherboard_id = async (id) => {
    try{
        const [rows] = await Motherboard.fetchID(id);
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}
