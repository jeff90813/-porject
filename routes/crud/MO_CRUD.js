const express = require('express');
const router = express.Router();
const db = require('../../utils/database');

router.get('/', async function (req, res, next) {
  let data;
  try {
    
    const [rows] = await db.query('SELECT * FROM motherboard ORDER BY id desc');
    data = rows;
     //res.json(data);
    res.render('motherboard_CRUD/index', { data });
  } catch (err) {
    console.log('Errors on getting data!');
    res.render('motherboard_CRUD', { data: '' });
  }
});

// display add cpu page
router.get('/add', async function (req, res, next) {
  res.render('motherboard_CRUD/add',{
    id:'',
    name:'',
    cpu_type:'',
    size:'',
    image_url:'',
  
   
  })
});

// add a new cpu
router.post('/add', async function (req, res, next) {
  const name =req.body.name;
  const cpu_type = req.body.cpu_type;
  const size = req.body.size ;
  
 
  const image_url = req.body.image_url;
const form_data ={
  name: name,
  cpu_type: cpu_type,
  size : size ,
  
 image_url:image_url,
 
};
  try{
    await db.query('INSERT INTO motherboard SET ?',form_data);
    res.redirect('/crud_motherboard');
  }catch(err){
    console.log(err)
    
  }
});

// display edit cpu page
router.get('/edit/:id', async function (req, res, next) {
 // res.send('display edit cpu page');
  const id = req.params.id;
  try{
    const [rows] = await db.query('SELECT * FROM motherboard WHERE id = ?' ,[id]);
    res.render('motherboard_CRUD/edit',{
      id:rows[0].id,
      name: rows[0].name,
      cpu_type: rows[0].cpu_type,
      size: rows[0]. size,
    
      image_url:rows[0].image_url,
    });
  }catch(err){
    console.log(err);
  }
  
});

// update cpu data
router.post('/update', async function (req, res, next) {
  const name =req.body.name;
  const cpu_type = req.body.cpu_type;
  const size = req.body.size ;
  const id=req.body.id;
 
  const image_url = req.body.image_url;
  try{
    await db.query('UPDATE motherboard SET name = ?,cpu_type =? ,size = ?, image_url = ?  WHERE id = ?', [
      name,
      cpu_type,
      size,
      
      image_url,
      id
      ]);
      //res.status(200).json({message:'update successful'});
      res.redirect('/crud_motherboard');
  }catch(err){
    console.log(err);
  }
});

// delete cpu
router.get('/delete/:id', async function (req, res, next) {
  let id = req.params.id;

  try {
    await db.query('DELETE FROM motherboard WHERE id = ?', [id]);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/crud_motherboard');
});

module.exports = router;
