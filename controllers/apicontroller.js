const cpuServ = require('./services/cpuServ');
const motherboardServ = require('./services/motherboardServ');
const ramServ = require('./services/ramServ');

exports.getcpu = async (req, res) => {
  const data = await cpuServ.fetchCpu();
  //res.json(data);
  res.render('cpu', {data});
}

exports.getmotherboard = async (req, res) => {
  const data = await motherboardServ.fetchMotherboard();
  //res.json(data);
  res.render('motherboard', {data});
}

exports.getmotherboard_id = async function (req, res,next) {
  const id = req.params.id;
  const data = await motherboardServ.fetchMotherboard_id(id);
 //res.json(data);
  res.render('motherboard', {data});
}






exports.getram = async (req, res) => {
  const data = await ramServ.fetchRam();
  //res.json(data);
  res.render('ram', {data});
}

exports.getselection = async (req, res) => {
  const data = await cpuServ.fetchCpu();
  //res.json(data);
  res.render('selection_list', {data});
}

exports.getram_id =async(req,res)=>{
  const cpu_id=req.params.cpu_id;
  const id=req.params.id;
  const data =await ramServ.fetchram_id(id);
  res.render('ram',{data});
  
}