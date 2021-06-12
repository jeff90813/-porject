const cpuServ = require('./services/cpuServ');
const motherboardServ = require('./services/motherboardServ');
const ramServ = require('./services/ramServ');

exports.getcpu = async (req, res) => {
  const data = await cpuServ.
  res.json(data);
}

exports.getmotherboard = async (req, res) => {
  const data = await motherboardServ
  res.json(data);
}


exports.getram = async (req, res) => {
  const data = await ramServ
  res.json(data);
}