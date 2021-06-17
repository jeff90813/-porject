const { raw } = require('express');
const Ram = require('../../models/ramModel')

exports.fetchRam = async () => {
    try{
        const [rows] = await Ram.fetchAll();
        return rows;
    }catch(err){
        return {message: 'Error on getting data'}
    }
}

exports.fetchram_id = async(cid,mid) => {
    
    try{
        
        const [rows] = await Ram.fetchID(cid,mid);
        
        return rows;
        

    }catch(err){
        return {message: 'Error on getting data'}
    }
}