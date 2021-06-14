const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', async function (req, res, next) {
  let data;
  try {
    
    const [rows] = await db.query('SELECT * FROM cpu_69 ORDER BY id desc');
    data = rows;
    // res.json(data);
    res.render('CPU_CRUD', { data });
  } catch (err) {
    console.log('Errors on getting data!');
    res.render('CPU_CRUD', { data: '' });
  }
});

// display add cpu page
router.get('/add', async function (req, res, next) {
  res.render('CPU_CRUD/add',{
    name:'',
    core:'',
    GHz:'',
    socket_id:'',
    image_url:''
  })
});

// add a new cpu
router.post('/add', async function (req, res, next) {
  const name =req.body.name;
  const core = req.body.core;
  const GHz = req.body.GHz;
  const socket_id = req.body.socket_id;

  const image_url = req.body.image_url;
const form_data ={
  name: name,
  core: core,
  GHz: GHz,
  socket_id: socket_id,
 image_url:image_url

};
  try{
    await db.query('INSERT INTO cpu_69 SET ?',form_data);
    res.redirect('/CPU_CRUD');
  }catch(err){
    console.log(err)
    res.render('CPU_CRUD/add',{
      name: form_data.name,
      core: form_data.core,
      GHz: form_data.GHz,
      socket_id: form_data.socket_id,
     image_url:from_data.image_url
    });
  }
});

// display edit cpu page
router.get('/edit/:id', async function (req, res, next) {
 // res.send('display edit cpu page');
  const id = req.params.id;
  try{
    const [rows] = await db.query('SELECT * FROM cpu_69 WHERE id = ?' ,[id]);
    res.render('CPU_CRUD/edit',{
      id:rows[0].id,
      name: rows[0].name,
      core: rows[0].core,
      GHz: rows[0].GHz,
      socket_id: rows[0].socket_id,
      image_url:rows[0].image_url
    });
  }catch(err){
    console.log(err);
  }
  
});

// update cpu data
router.post('/update', async function (req, res, next) {
  const name = req.body.name;
  const core = req.body.core;
  const GHz =  req.body.GHz;
  const socket_id = req.body.socket_id;

  const id = req.body.id;
  const image_url = req.body.image_url;
  try{
    await db.query('UPDATE cpu_69 SET name = ?,core =? ,GHz = ?,socket_id = ? ,image_url = ?  WHERE id = ?', [
      name,
      core,
      GHz,
      socket_id,
      image_url,
      id
      ]);
      //res.status(200).json({message:'update successful'});
      res.redirect('/CPU_CRUD');
  }catch(err){
    console.log(err);
  }
});

// delete cpu
router.get('/delete/:id', async function (req, res, next) {
  let id = req.params.id;

  try {
    await db.query('DELETE FROM cpu_69 WHERE id = ?', [id]);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/CPU_CRUD');
});

module.exports = router;
