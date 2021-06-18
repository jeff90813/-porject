const cpuServ = require('./services/cpuServ');
const motherboardServ = require('./services/motherboardServ');
const ramServ = require('./services/ramServ');
const selectServ =require('./services/selectServ');
exports.getcpu = async (req, res) => {
  const data = await cpuServ.fetchCpu();
  //res.json(data);
  res.render('cpu', {data});
}
exports.getcpulist = async (req, res) => {
  const data = await cpuServ.fetchCpu();
  //res.json(data);
  res.render('list/cpu', {data});
}




exports.getmotherboard = async (req, res) => {
  const data = await motherboardServ.fetchMotherboard();
  //res.json(data);
  res.render('motherboard', {data});
}
exports.getmotherboardlist = async (req, res) => {
  const data = await motherboardServ.fetchMotherboard();
  //res.json(data);
  res.render('list/motherboard', {data});
}
exports.getmotherboard_id = async function (req, res,next) {
  const id = req.params.id;
  const data = await motherboardServ.fetchMotherboard_id(id);
 //res.json(data);
  res.render('motherboard', {data});
}




exports.getselection=async function(req,res,next){
  const cpu_id=req.params.cpu_id ;
  const motherboard_id=req.params.motherboard_id ;

  const ram_id=req.params.id ;
  console.log(cpu_id, motherboard_id, ram_id);


  const cpu_data = await selectServ.fetchcpu(cpu_id);
  const motherboard_data = await selectServ.fetchmotherboard(cpu_id,motherboard_id);
  const ram_data = await selectServ.fetchram(cpu_id, motherboard_id, ram_id); 

  //console.log(data);
  //res.json(cpu_data);
  res.render('selection_list',{
    cpu_data,
    motherboard_data,
    ram_data,
  });
}




exports.getram = async (req, res) => {
  const data = await ramServ.fetchRam();
  //res.json(data);
  res.render('ram', {data});
}

exports.getramlist = async (req, res) => {
  const data = await ramServ.fetchRam();
  //res.json(data);
  res.render('list/ram', {data});
}

exports.getram_id =async(req,res)=>{
  const cid=req.params.cpu_id;
  const mid=req.params.id;
  

  const data =await ramServ.fetchram_id(cid,mid);
 
  res.render('ram',{data});
  
}